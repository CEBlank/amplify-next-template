//"use client"

import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/ServerComponent";
import LocationFinderClient from "./components/ClientComponent";
import Loading from "./loading";
import { Suspense } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function App() {
  

  return (
    <main>

      <section>
          <LocationFinderServer />
      </section>

      <section>
        <Suspense fallback={<Skeleton />}>
          <LocationFinderClient />
        </Suspense>
      </section>
      
      <section>
        <ToDo /> 
      </section>
      
    </main>
  );
}
