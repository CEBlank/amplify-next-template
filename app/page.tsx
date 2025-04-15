//"use client"

import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/ServerComponent";
import LocationFinderClient from "./components/ClientComponent";
import Loading from "./components/loading";
import { Suspense } from "react";


export default function App() {
  

  return (
    <main>

      <section>
          <LocationFinderServer />
      </section>

      <section>
        <Suspense fallback={<Loading />}>
          <LocationFinderClient />
        </Suspense>
      </section>
      
      <section>
        <ToDo /> 
      </section>
      
    </main>
  );
}
