import { React, useState } from 'react';
import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  const [externalCity, setExternalCity] = useState("Paris");

  const handleCityChange = (externalCity) => {
    setExternalCity(externalCity);
  };
  return (
      <section className="App">
        <div className="container wrapper">
          <Search onChange={handleCityChange} />
          <Current externalCity={externalCity} />
          <Forecast />
        </div>
        <div>
          This project was coded by Ol-Iva and is{" "}
          <a href="https://github.com/ol-iva/weather-react-app">
             Open-source code on GitHub
          </a> {" "}
          and {" "}
          <a href="https://thunderous-bonbon-2d0c18.netlify.app/">
            hosted on Netlify
          </a>
        </div>
      </section>
  );
}