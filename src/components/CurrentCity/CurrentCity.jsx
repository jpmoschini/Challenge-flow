import React, { useContext } from 'react';
import "./currentCity.css";
import CurrentDay from "../CurrentDay/CurrentDay";
import Forecast from "../Forecast/Forecast";
import { cityContext } from '../../context/cityContext';

const CurrentCity = () => {
    const { currentCity } = useContext(cityContext);

    return (

        <div className="container box-currentCity">
            {
                currentCity ?
                    <>
                        <div className="row justify-content-md-center">
                            <CurrentDay />
                        </div>
                        <div className="row justify-content-md-center">
                            <Forecast />
                        </div>
                    </> :
                    <div className="select">
                        <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" />
                        <h2>Please Select a City</h2>
                    </div>
            }
        </div>
    );
};

export default CurrentCity;