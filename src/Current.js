import { React } from "react";
import { FormattedDate } from "./FormattedDate";

import "./Current.css";

export default function Current(props) {
        return (
            <div>
                <div className="Current container current">
                    <div className="row">
                        <div className="col-6">
                            {props.weatherData.icon ? (
                                <img
                                    src={props.weatherData.icon}
                                    alt={props.weatherData.description}
                                    id="main-icon"
                                    className="float-left"
                                />
                            ) : (
                                ""
                            )}

                            <h2 className="float-right temperature">
                                <span id="temperature-now">{props.weatherData.temperature}</span>
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
                                    Humidity: <span id="humidity-now">{props.weatherData.humidity} %</span>
                                </li>
                                <li>
                                    Wind: <span id="wind-now">{props.weatherData.speed} m/s</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <h6 className="date">
                        <FormattedDate date={props.weatherData.date} />,
                        <span id="description" className="text-capitalize"> {props.weatherData.description}</span>
                    </h6>
                    <h2 className="place" id="place">
                        {props.weatherData.city}
                    </h2>
                </div>
            </div>
        );
    }
