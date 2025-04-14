"use client";

import { useEffect, useState } from "react";

export default function LocationFinderClient() {
    const [locationInfo, setLocationInfo] = useState({City: "N/A"});

    const getLocationInfo = async () => {
      const response = await fetch("https://apip.cc/json");
      const locationData = await response.json();
      setLocationInfo(locationData);
      console.log(response);

    };

    useEffect(() => {
        getLocationInfo();
    }, [])

return (
    <>
        <h1>Client Component: Hello from {locationInfo.City}!</h1>
    </>
);
}