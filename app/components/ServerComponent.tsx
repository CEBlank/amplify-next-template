export default async function LocationFinderServer() {
    
    const response = await fetch("https://apip.cc/json");
    const locationData = await response.json();
    const locationInfo = locationData;

return (
    <>
        <h1>Server Component: Hello from {locationInfo?.City}!</h1>
    </>
);
}