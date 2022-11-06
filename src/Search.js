import React, { useState } from "react";

import "./Search.css";

export function externalCity(city) {
    return { city };
}

export default function Search({ onChange }) {
    const [city, setCity] = useState("");

    function showCity(event) {
        event.preventDefault();
        onChange(city);
    }

    function handleExternalCityChange(event) {
        setCity(event.target.value);
    }

    return (
        <div>
            <div className="Search search-form-container">
                <form id="search-form" onSubmit={showCity}>
                    <div className="row">
                        <div className="col-9">
                            <input
                                id="city-input"
                                type="text"
                                autoComplete="off"
                                placeholder="Search place..."
                                onChange={handleExternalCityChange}
                            />
                            <input type="hidden" name="units" value="metric" id="units" />
                        </div>
                        <div className="col-3">
                            <input type="submit" value="Search" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
