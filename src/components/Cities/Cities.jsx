import React, { useContext } from 'react';
import { cityContext } from '../../context/cityContext';
import useGeoLocation from '../../hooks/useGeoLocation';
import "./cities.css";

const Cities = () => {
    const { cities, getSelectedLocation } = useContext(cityContext);
    const location = useGeoLocation();

    const handleLocation = (city) => {
        const { lat, lon } = city;
        getSelectedLocation(lat, lon)
    }

    const handleUserLocation = () => {
        const { lat, lon } = location.coordinates;
        getSelectedLocation(lat, lon)
    }

    return (
        <div className="cities-container">

            <ul className="nav nav-pils nav-fill">
                <li className="nav-item">
                    <button type="button" className="btn btn-light" onClick={() => handleUserLocation()} > Your Location </button>
                </li>
                {cities.map((city, index) => {
                    return (
                        <li className="nav-item" key={city.id}>
                            <button type="button" className="btn btn-light" onClick={() => handleLocation(city)}> {city.name} </button>
                        </li>
                    )
                })}
            </ul>

        </div>


    );
};

export default Cities;