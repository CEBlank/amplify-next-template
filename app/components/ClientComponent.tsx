"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({"City" : "N/A"});

    //get into the weeds of location Data
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [latitude, setLat] = useState("");
    const [longitude, setLon] = useState("");


    const [localWeather, setLocalWeather] = useState("");

    const [loadingGlimmer, setLoading] = useState(true);
    const [localFahrenheit, setFahrenheit] = useState(0);
    
    const getLocationInfo = async () => {
      //await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();

      setLocationInfo(locationData);


      setCity(locationData.City);
      setCountry(locationData.CountryName);
      setLat(locationData.Latitude);
      setLon(locationData.Longitude);

     // console.log(locationInfo);
     // console.log(locationData.City);
      console.log("City: ", city, "Country: ", country, "Lat:", latitude, "long:", longitude);
    

        //weather based on location data API 
        const url = "https://www.7timer.info/bin/astro.php?lon=" 
                    + locationData?.Longitude
                    + "$lat="
                    + locationData?.Latitude
                    + "&ac=0&unit=metric&output=json&tzshift=0";

        const res = await fetch(url);
        const weatherData = await res.json();
     //   console.log(url);

        setLocalWeather(weatherData?.dataseries[0]?.temp2m);
        console.log(localWeather);

        const temp = weatherData?.dataseries[0]?.temp2m;

        setFahrenheit((temp * 1.8) + 32);
        Number(localFahrenheit).toFixed(0);

       // console.log("Fahrenheit", localFahrenheit);

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
                <h3>Hello from {locationInfo.City}!</h3>
                <p>The temperature in {locationInfo.City} is {localWeather} degrees Celsius, {localFahrenheit} degrees Fahrenheit.</p> 
         </>
        )}
    </>
);
}