import { React, useState } from "react";
import axios from "axios";

import "./Current.css";

export default function Current({ externalCity }) {
    let [temperature, setTemperature] = useState(null);
    let [icon, setIcon] = useState(null);
    let [humidity, setHumidity] = useState(null);
    let [speed, setSpeed] = useState(null);
    let [descriptionWeather, setDescriptionWeather] = useState(null);

    let apiKey = "e7a0e5ad9471df9dbff483f56c2d189b";
    let unit = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${externalCity}&appid=${apiKey}&units=${unit}`;
    console.log(url);
    function showTemperature(response) {
        setTemperature(Math.round(response.data.main.temp));
        setHumidity(Math.round(response.data.main.humidity));
        setSpeed(Math.round(response.data.wind.speed));
        setIcon(
            "https://openweathermap.org/img/wn/" +
            response.data.weather[0].icon +
            "@2x.png"
        );
        setDescriptionWeather(response.data.weather[0].description);
        console.log(response.data);
    }

    axios.get(url).then(showTemperature);

    return (
        <div>
            <div className="Current container current">
                <div className="row">
                    <div className="col-6">
                        {icon ? (
                            <img
                                src={icon}
                                alt={descriptionWeather}
                                id="main-icon"
                                className="float-left"
                            />
                        ) : (
                            ""
                        )}

                        <h2 className="float-right temperature">
                            <span id="temperature-now">{temperature}</span>
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
                                Humidity: <span id="humidity-now">{humidity} %</span>
                            </li>
                            <li>
                                Wind: <span id="wind-now">{speed} m/s</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <h6 className="date">
                    <span id="date">Saturday 11:52</span>,
                    <span id="description"> {descriptionWeather}</span>
                </h6>
                <h2 className="place" id="place">
                    {externalCity}
                </h2>
            </div>
        </div>
    );
}
