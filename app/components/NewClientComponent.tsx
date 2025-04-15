"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function NewLocationFinderClient() {
    const [loadingGlimmer, setLoading] = useState(true);
    const [localFahrenheit, setFahrenheit] = useState(0);

    const [userCity, setCity] = useState("");
    const [userLat, setLat] = useState("");
    const [userLong, setLong] = useState("");
    const [localWeather, setLocalWeather] = useState("");

    
    const getLocationInfo = async () => {


      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();

      setCity(locationData?.City);
      setLong(locationData?.Longitude);
      setLat(locationData?.Latitude);

       // console.log(locationData);
        //console.log(locationData?.City);
        console.log("first log:", userCity);


            //weather based on location data API 
            const url = "https://www.7timer.info/bin/astro.php?lon="
            + locationData.Longitude
            + "$lat="
            + locationData.Latitude
            + "&ac=0&unit=metric&output=json&tzshift=0";

            const res = await fetch(url);
            const weatherData = await res.json();

            console.log(url);

            setLocalWeather(weatherData?.dataseries[0]?.temp2m);

           // console.log(localWeather);

            const temp = weatherData?.dataseries[0]?.temp2m;

            setFahrenheit((temp * 1.8) + 32);
            Number(localFahrenheit).toFixed(0);

            // console.log("Fahrenheit", localFahrenheit);

        console.log(userCity);

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
                <p>The temperature in {userCity} is {localWeather} degrees Celsius, {localFahrenheit} degrees Fahrenheit.</p> 
         </>
        )}
    </>
);
}