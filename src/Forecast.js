import { React } from "react";
import OneDay from "./OneDay";

import "./Forecast.css";

export default function Forecast() {
    return (
        <div className="container-fluid forecast w-100" id="forecast">
            <div className="row" id="forecast-daily">
                <OneDay
                    day="Today"
                    icon="https://openweathermap.org/img/wn/03d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#ffec3d", color: "#333333" }}
                    maxTemp={20}
                    minTemp={10}
                    wind={1}
                    humidity={88}
                />
                <OneDay
                    day="Sun"
                    icon="https://openweathermap.org/img/wn/04d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#3de8ff", color: "#333333" }}
                    maxTemp={18}
                    minTemp={10}
                    wind={3}
                    humidity={78}
                />
                <OneDay
                    day="Mon"
                    icon="https://openweathermap.org/img/wn/04d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#3de8ff", color: "#333333" }}
                    maxTemp={18}
                    minTemp={8}
                    wind={4}
                    humidity={67}
                />
                <OneDay
                    day="Tue"
                    icon="https://openweathermap.org/img/wn/10d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#ffec3d", color: "#333333" }}
                    maxTemp={19}
                    minTemp={11}
                    wind={3}
                    humidity={74}
                />

                <OneDay
                    day="Wed"
                    icon="https://openweathermap.org/img/wn/04d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#3de8ff", color: "#333333" }}
                    maxTemp={18}
                    minTemp={11}
                    wind={2}
                    humidity={82}
                />
                <OneDay
                    day="Thu"
                    icon="https://openweathermap.org/img/wn/04d@2x.png"
                    classIcon="sun-icon"
                    styleColor={{ backgroundColor: "#3de8ff", color: "#333333" }}
                    maxTemp={16}
                    minTemp={7}
                    wind={6}
                    humidity={70}
                />
            </div>
        </div>
    );
}
