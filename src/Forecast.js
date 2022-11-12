import  React,{ useState, useEffect } from "react";
import axios from "axios";
import OneDay from "./OneDay";
import { formattedDay } from "./FormattedDate";

import "./Forecast.css";

export default function Forecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
    }

    function load() {
        let apiKey = "e7a0e5ad9471df9dbff483f56c2d189b";
        let longitude = props.coords.lon;
        let latitude = props.coords.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        axios.get(apiUrl).then(handleResponse);
    }

    function icon(url) {
        return "https://openweathermap.org/img/wn/" +  url +  "@2x.png";
    }
    function convertTemp(temp) {
        return Math.round(temp);
    }
    function colors(temp) {
        if (temp < 0) {
            return { backgroundColor: "#004085", color: "#ffffff" };
        }
        if (temp >= 0 && temp < 15) {
            return { backgroundColor: "#3de8ff", color: "#333333" }
        }
        if (temp >= 15 && temp < 22) {
            return { backgroundColor: "#ffec3d", color: "#333333" }
        }
        if (temp >= 22 && temp < 30) {
            return { backgroundColor: "#ff8b3d", color: "#333333" }
        }
        return { backgroundColor: "#ef4310", color: "#fff" }
    }
    function showHumidity(humidity) {
        return Math.round(humidity);
    }
    function windSpeed(wind) {
        return Math.round(wind);
    }
    function humidityIcon(humidity) {
        if(humidity < 40) {
            return 'humidity_low';
        }
        if(humidity >= 40 && humidity < 60) {
            return 'humidity_mid';
        }
        return 'humidity_high';
    }


    if (loaded) {
    return (
        <div className="container-fluid forecast w-100" id="forecast">
            <div className="row" id="forecast-daily">
                {forecast.map(function (dailyForecast, index) {
                    if (index < 6) {
                       return (
                           <div className="col-sm-6 col-md-2" key={index}>
                           <OneDay
                            day={formattedDay(dailyForecast.dt)}
                            icon={icon(dailyForecast.weather[0].icon)}
                            classIcon="sun-icon"
                            styleColor={colors(dailyForecast.temp.day)}
                            maxTemp={convertTemp(dailyForecast.temp.max)}
                            minTemp={convertTemp(dailyForecast.temp.min)}
                            wind={windSpeed(dailyForecast.wind_speed)}
                            humidity={showHumidity(dailyForecast.humidity)}
                            humidityIcon={humidityIcon(dailyForecast.humidity)}
                            time={dailyForecast.td}
                        />
                           </div>
                       );
                    }
                    return null;
                })
                }

            </div>
        </div>
    );
    } else {
        load();
        return null;
    }
}
