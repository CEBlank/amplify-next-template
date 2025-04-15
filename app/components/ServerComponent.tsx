export default async function LocationFinderServer() {
    
    const response = await fetch("https://apip.cc/json");
    const locationData = await response.json();
    const locationInfo = locationData;

    const url = "https://www.7timer.info/bin/astro.php?lon=" 
    + locationData?.Longitude
    + "$lat="
    + locationData?.Latitude
    + "&ac=0&unit=metric&output=json&tzshift=0";

    const res = await fetch(url);
    const weatherData = await res.json();
    
    
    const localWeather = weatherData?.dataseries[0]?.temp2m
    const localFahrenheit = (localWeather * 9/5) + 32;


return (
    <>
        <h4>Server Component:</h4>
            <h3>Hello from {locationInfo?.City}!</h3>
        <p>
           The local temperature is {localWeather} degrees Celsius, {localFahrenheit} degrees Fahrenheit.
        </p>
    </>
);
}