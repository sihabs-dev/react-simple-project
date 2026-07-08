import { Suspense } from "react";
import "./App.css";
// import Practice from "./practice";
import Countries from "./components/countries";
const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());

function App() {
  return (
    <>
      <Suspense fallback={<h3>countries is loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
