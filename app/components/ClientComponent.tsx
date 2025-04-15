"use client";

import { use, useEffect, useState } from "react";

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: "N/A"});
    const [localWeather, setLocalWeather] = useState(null);
    const [temperatureConvert, setConversion] = useState(0);
    
    
    const getLocationInfo = async () => {
      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();
      setLocationInfo(locationData);
      console.log(response);

        const res = await fetch("https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0");
        const weatherData = (await res.json()).dataseries;
    
        setLocalWeather(weatherData[0].temp2m);
        
    };

    useEffect(() => {
        getLocationInfo();
    }, [])

return (
    <>
        <h4>Client Component</h4>
        <h2>Hello from {locationInfo.City}!</h2>
        <p>The temperature in {locationInfo.City} is {localWeather} degrees Celcius </p> 
    </>
);
}