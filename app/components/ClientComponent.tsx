"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function LocationFinderClient() {
   
    const [userCity, setCity] = useState(""); 
    const [localWeather, setLocalWeather] = useState(0);

    const [loadingGlimmer, setLoading] = useState(true);
    const [localFahrenheit, setFahrenheit] = useState(0);
    
    const getLocationInfo = async () => {
      //await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();

      setCity(locationData?.City);

      console.log(locationData);
      console.log(locationData.City);
    
        
      //weather based on location data API 
      const url = "https://www.7timer.info/bin/astro.php?lon="
        + locationData?.Longitude
        + "&lat="
        + locationData?.Latitude
        + "&ac=0&unit=metric&output=json&tzshift=0";

            console.log(url);

         const res = await fetch(url);
         const weatherData = await res.json();   

       setLocalWeather(weatherData?.dataseries[0]?.temp2m);
      

       const temp = weatherData?.dataseries[0]?.temp2m;

       setFahrenheit((temp * 1.8) + 32);
       Number(localFahrenheit).toFixed(0);

        setLoading(false);
    };

    useEffect(() => {
        getLocationInfo();
    }, [])

return (
    <>
        {loadingGlimmer ? (
            <Loading />
        ) : (
            <>
                <h4>Client Component:</h4>
                <h3>Hello from {userCity}!</h3>
                <p>The temperature in {userCity} is {localWeather}° Celsius, or {localFahrenheit}° Fahrenheit.</p> 
         </>
        )}
    </>
);
}