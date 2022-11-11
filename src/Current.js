import { React, useState } from "react";
import axios from "axios";

import "./Current.css";

export default function Current({ externalCity }) {
    let [weatherData, setWeatherData] = useState({ready: false})

    function showTemperature(response) {
        console.log(response);
        setWeatherData({
            ready: true,
            temperature: Math.round(response.data.main.temp),
            humidity: Math.round(response.data.main.humidity),
            speed: Math.round(response.data.wind.speed),
            icon: "https://openweathermap.org/img/wn/" +
                response.data.weather[0].icon +
                "@2x.png",
            description: response.data.weather[0].description,
            city: response.data.name

        });
    }

    if (weatherData.ready) {
        console.log(weatherData);
        return (
            <div>
                <div className="Current container current">
                    <div className="row">
                        <div className="col-6">
                            {weatherData.icon ? (
                                <img
                                    src={weatherData.icon}
                                    alt={weatherData.description}
                                    id="main-icon"
                                    className="float-left"
                                />
                            ) : (
                                ""
                            )}

                            <h2 className="float-right temperature">
                                <span id="temperature-now">{weatherData.temperature}</span>
                                <span className="units">
                <a href="/" id="celsius" className="active">
                  °C
                </a>{" "}
                                    |
                <a href="/" id="fahrenheit">
                  °F
                </a>
              </span>
                            </h2>
                        </div>
                        <div className="col-6">
                            <ul className="detailed-weather float-right">
                                <li>
                                    Humidity: <span id="humidity-now">{weatherData.humidity} %</span>
                                </li>
                                <li>
                                    Wind: <span id="wind-now">{weatherData.speed} m/s</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h6 className="date">
                        <span id="date">Saturday 11:52</span>,
                        <span id="description" className="text-capitalize"> {weatherData.description}</span>
                    </h6>
                    <h2 className="place" id="place">
                        {weatherData.city}
                    </h2>
                </div>
            </div>
        );
    } else {
        let apiKey = "e7a0e5ad9471df9dbff483f56c2d189b";
        let unit = "metric";
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${externalCity}&appid=${apiKey}&units=${unit}`;

        axios.get(url).then(showTemperature);

        return "Loading ..."

    }




}
