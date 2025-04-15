//"use client"

import "./../app/app.css";
import ToDo from "./components/ToDo";
import LocationFinderServer from "./components/ServerComponent";
import LocationFinderClient from "./components/ClientComponent";
import Loading from "./loading";
import { Suspense } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import NewLocationFinderClient from "./components/NewClientComponent";


export default function App() {
  

  return (
    <main>

<section>
        <Suspense fallback={<Skeleton />}>
          <NewLocationFinderClient />
        </Suspense>
      </section>

      <section>
          <LocationFinderServer />
      </section>

{/*       <section>
        <Suspense fallback={<Skeleton />}>
          <LocationFinderClient />
        </Suspense>
      </section> */}
      
      <section>
        <ToDo /> 
      </section>
      
    </main>
  );
}
