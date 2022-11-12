import React from "react";

export default  function FormattedDate(props) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`
    }
    if (hours < 10) {
        hours = `0${hours}`
    }
    console.log(props.date);
    return (<span id="date">{day}{" "}{hours}:{minutes}</span>);
}

export function formattedDay(timestamp) {
    let date = new Date(timestamp * 1000);

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[date.getDay()];
}