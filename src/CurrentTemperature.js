import React, {useState} from "react";


export default function CurrentTemperature(props) {
    // let [unit, setUnit] = useState("celsius");
    // let [temperature, setTemperature] = useState(props.celsius);
    //
    // console.log(temperature)
    //
    // function handleFahrenheit(event) {
    //     event.preventDefault();
    //     let fahrenheit = Math.round((temperature * 9/5) + 32);
    //     setTemperature(fahrenheit);
    //     setUnit("fahrenheit");
    // }
    // function handleCelsius(event) {
    //     event.preventDefault();
    //     setTemperature(props.celsius);
    //     setUnit("celsius");
    // }
    //
    // if (unit === "celsius") {
        return (<span>
        <span id="temperature-now">{props.celsius}</span>
    <span className="units">
                <span className="active">
                  °C
                </span>{" "}
        {/*|*/}
        {/*        <a href="/" id="fahrenheit" onClick={handleFahrenheit}>*/}
        {/*          °F*/}
        {/*        </a>*/}
              </span>
    </span>)
    // } else {
    //     return (<span>
    //     <span id="temperature-now">{temperature}</span>
    //         <span className="units">
    //             <a href="/" id="celsius" onClick={handleCelsius}>
    //               °C
    //             </a>{" "}
    //     |
    //             <span className="active">
    //               °F
    //             </span>
    //           </span>
    // </span>)
    // }

}