import { cityContext } from './cityContext';
import React, { useReducer } from 'react';
import cityReducer from './cityReducer';
import { cities } from "../cities";

const CityState = (props) => {
    const initialState = {
        cities: [
            ...cities
        ],
        currentCity: null,
    }
    const [state, dispatch] = useReducer(cityReducer, initialState)

    const getSelectedLocation = async (lat, lon) => {
        const nameURL = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCKEY}&lat=${lat}&lon=${lon}&format=json&zoom=[10]`;
        const wheatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,alerts,minutely&units=metric&appid=${process.env.REACT_APP_APIKEY}`;
        try {
            const nameResponse = await fetch(nameURL).then((response) => response.json());;
            const Weatherdata = await fetch(wheatherUrl).then((response) => response.json());
            dispatch({ type: 'GET_LOC', payload: { ...Weatherdata, cityName: nameResponse.address.city } })
        } catch (error) {
            console.log('Error happened here!');
            console.error(error);
        }
    }

    return (
        <cityContext.Provider value={{
            cities: state.cities,
            currentCity: state.currentCity,
            getSelectedLocation,
        }}>
            {props.children}
        </cityContext.Provider>
    );


}
export default CityState;
