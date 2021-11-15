import React, { useContext } from 'react';
import { cityContext } from '../../context/cityContext';
import moment from 'moment';
import 'moment/locale/es';
import "./forecast.css";


const Forecast = () => {
    const { currentCity } = useContext(cityContext);
    const imgUrlBase = "http://openweathermap.org/img/wn/";

    const showDay = (current, day) => {
        const localDate = new Date((day.dt + (3600 * 3) + current.timezone_offset))
        moment.locale('es');
        return moment.unix(localDate).format('ddd');

    }


    return (
        <div className="row justify-content-md-center">
            {
                currentCity.daily.slice(1, 6).map((day, index) => {
                    return <div className="col-md-auto" key={index}>
                        <img className="mb-2" width="50" src={`${imgUrlBase}${day.weather[0].icon}@2x.png`} alt="weather icon" />
                        <p>{showDay(currentCity, day)}</p>
                        <p>Max: {day.temp.max}ºC</p>
                        <p>Min: {day.temp.min}ºC</p>
                    </div>
                })
            }

        </div>
    );
};

export default Forecast;