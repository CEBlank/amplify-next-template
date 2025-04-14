"use client"

import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/ServerComponent";
import LocationFinderClient from "./components/ClientComponent";


export default function App() {
  

  return (
    <main>
      <LocationFinderServer />
      <br />
      <LocationFinderClient />
      <br />
      <ToDo />
    </main>
  );
}
