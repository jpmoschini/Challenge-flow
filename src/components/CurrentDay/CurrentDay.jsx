import React, { useContext } from 'react';
import { cityContext } from '../../context/cityContext';
import moment from 'moment';
import 'moment/locale/es';
import "./currentDay.css";

const CurrentDay = () => {
    const { currentCity } = useContext(cityContext);
    const imgUrlBase = "http://openweathermap.org/img/wn/";

    const localDate = new Date((currentCity.current.dt + (3600 * 3) + currentCity.timezone_offset))
    moment.locale('es');
    const formattedDate = moment.unix(localDate).format('ddd Do MMM');

    return (

        <div className="row justify-content">
            <div className="col-6 city-name">
                <h1>
                    {currentCity.cityName}
                </h1>
                <h3>
                    {formattedDate}
                </h3>
            </div>
            <div className="col-6 icon">
                <img className="mb-2" width="100" src={`${imgUrlBase}${currentCity.current.weather[0].icon}@2x.png`} alt="weather icon" />
                <p>
                    {currentCity.current.temp}ºC
                </p>
                <p>
                    {currentCity.current.weather[0].description}
                </p>
            </div>
        </div>
    );
};

export default CurrentDay;