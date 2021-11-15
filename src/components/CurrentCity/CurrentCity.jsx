import React, { useContext } from 'react';
import "./currentCity.css";
import CurrentDay from "../CurrentDay/CurrentDay";
import Forecast from "../Forecast/Forecast";
import { cityContext } from '../../context/cityContext';

const CurrentCity = () => {
    const { currentCity } = useContext(cityContext);

    return (
        /* 
        
        
        
        */
        <div className="container   box">
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
                    <div>
                        Select a City
                    </div>
            }
        </div>
    );
};

export default CurrentCity;