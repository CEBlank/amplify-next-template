"use client";

import { useEffect, useState } from "react";
import Loading from "../loading";

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: "N/A"});
    const [localWeather, setLocalWeather] = useState(0);
    const [loadingGlimmer, setLoading] = useState(true);
    const [localFahrenheit, setFahrenheit] = useState(0);
    
    const getLocationInfo = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();
      setLocationInfo(locationData);
     // console.log(response);

        const res = await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0");
        const weatherData = (await res.json()).dataseries;
        setLocalWeather(weatherData[0].temp2m);

        setFahrenheit((localWeather * 9/5) + 32);

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
                <h4>Client Component</h4>
                <h3>Hello from {locationInfo.City}!</h3>
                <p>The temperature in {locationInfo.City} is {localWeather} degrees Celsius, {localFahrenheit} degrees Fahrenheit.</p> 
         </>
        )}
    </>
);
}