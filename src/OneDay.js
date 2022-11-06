import { React } from "react";

import "./OneDay.css";

export default function OneDay(props) {
    return (
        <div className="OneDay day col-2">
            <div className="day-title">
                <h5>{props.day}</h5>
            </div>
            <div className="img-sun">
                <img src={props.icon} alt="" className={props.classIcon} />
            </div>
            <div className="avarage-temperature" style={props.styleColor}>
                <span className="max">{props.maxTemp}°</span>
                <span className="min">{props.minTemp}°</span>
            </div>
            <div className="wind">
                <span className="material-symbols-outlined"> air </span>
                <span className="wind-speed">{props.wind}</span> m/s
            </div>
            <div className="humidity">
                <div>
                    <span className="material-symbols-outlined">humidity_high</span>
                </div>
                <span className="humidity-number">{props.humidity}</span> %
            </div>
        </div>
    );
}
