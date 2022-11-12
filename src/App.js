import { React, useState } from 'react';
import Current from "./Current";
import Forecast from "./Forecast";
import "./App.css";
import "./Search.css";
import axios from "axios";

export default function App() {
  const [externalCity, setExternalCity] = useState("Paris");
    let [weatherData, setWeatherData] = useState({ready: false});

    function showTemperature(response) {
        setWeatherData({
            ready: true,
            temp: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            speed: Math.round(response.data.wind.speed),
            icon: "https://openweathermap.org/img/wn/" +
                response.data.weather[0].icon +
                "@2x.png",
            description: response.data.weather[0].description,
            city: response.data.name,
            date: new Date(response.data.dt * 1000)
        });
        console.log(weatherData);
    }


    function search() {
        let apiKey = "e7a0e5ad9471df9dbff483f56c2d189b";
        let unit = "metric";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${externalCity}&appid=${apiKey}&units=${unit}`;
        console.log(url);

        axios.get(url).then(showTemperature);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setExternalCity(event.target.city.value);
        search();
    }

    function handleExternalCityChange(event) {
        event.target.setAttribute("value", event.target.value);
        // setExternalCity(event.target.value);
    }

    if (weatherData.ready) {
        console.log(weatherData);
        return (
            <section className="App">
                <div className="container wrapper">
                    <div className="Search search-form-container">
                        <form id="search-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-9">
                                    <input
                                        id="city-input"
                                        type="text"
                                        autoComplete="off"
                                        placeholder="Search place..."
                                        name="city"

                                        onChange={handleExternalCityChange}
                                    />
                                    <input type="hidden" name="units" value="metric" id="units"/>
                                </div>
                                <div className="col-3">
                                    <input type="submit" value="Search"/>
                                </div>
                            </div>
                        </form>
                    </div>
                    <Current weatherData={weatherData}/>
                    <Forecast/>
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
    } else {
        search();
        return (<section className="App"><div>Loading ...</div></section>);
    }
}