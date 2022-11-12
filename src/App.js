import {React, useEffect, useState} from 'react';
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
            date: new Date(response.data.dt * 1000),
            coords: response.data.coord
        });
        changeColorBody(Math.round(response.data.main.temp));
    }

    useEffect(() => {
        setWeatherData({ready: false});
    }, [externalCity]);

    function search() {
        let apiKey = "e7a0e5ad9471df9dbff483f56c2d189b";
        let unit = "metric";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${externalCity}&appid=${apiKey}&units=${unit}`;

        axios.get(url).then(showTemperature);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setExternalCity(event.target.city.value);
        search();
    }

    function handleExternalCityChange(event) {
        event.target.setAttribute("value", event.target.value);
        setExternalCity(event.target.value);
    }

    function changeColorBody(temp) {
        let body = document.querySelector("body");
        if (temp <= 0) {
            body.setAttribute("style", "background: rgba(0,64,133,.2);");
        }
        if (temp > 0 && temp <= 15) {
            body.setAttribute("style", "background: rgba(61,232,255,.2);");
        }
        if (temp > 15 && temp <= 25) {
            body.setAttribute("style", "background: rgba(255,236,61,.2);");
        }
        if (temp > 25 && temp <= 35) {
            body.setAttribute("style", "background: rgba(255,139,61,.2);");
        }
        if (temp > 35) {
            body.setAttribute("style", "background: rgba(239,67,16,.2);");
        }

    }

    if (weatherData.ready) {
        return (
            <section className="App">
                <div className="container wrapper">
                    <div className="Search search-form-container">
                        <form id="search-form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-9">
                                    <input
                                        id="city-input"
                                        placeholder="Enter a city.."
                                        className="form-control"
                                        autoFocus="on"
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
                    <Forecast coords={ weatherData.coords }/>
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