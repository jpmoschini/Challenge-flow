import React from 'react';
import "./cities.css";

const Cities = (props) => {


    return (
        <div className="cities-container">
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">props.city.name</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Mar del Plata</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Buenos Aires</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Rosario</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Córdoba</a>
                </li>
            </ul>        </div>
    );
};

export default Cities;