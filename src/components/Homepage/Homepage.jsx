import React, { useEffect, useState } from 'react';
import "./homepage.css";
import Cities from "../Cities/Cities";

const Homepage = () => {
    //const [weather, setweather] = useState([]);
    /*     var lat = 0;
        var lon = 0; */
    const apiKey = "****";

    //For Geolocation
    /*     var options = {
            enableHighAccuracy: true,
            maximumAge: 0
        };
        function error(err) {
            alert("Please allow geolocation");
        };
        function getPosition(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            console.log("Dentro de la función: lat: " + lat + ", lon: " + lon);
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getPosition, error, options);
        } */

    const [coords, setCoords] = useState({});
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async function (position) {
            const userCoords = await position.coords;
            setCoords(userCoords)
        });
    }, [])

    const initialURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + coords?.latitude + "&lon=" + coords?.longitude + "&units=metric&mode=json&appid=" + apiKey;
    console.log(coords.latitude);
    console.log(initialURL);


    useEffect(() => {
        fetch(initialURL).then(async response => {
            try {
                const data = await response.json();
                setWeatherData(data);
                console.log(data.city.name);
            } catch (error) {
                console.log('Error happened here!');
                console.error(error);
            }
        });
    }, []);
    console.log(weatherData);

    return (
        <div className="homepage-wrapper">
            <div className="title">
                <h1>Weather App</h1>
            </div>
            <Cities />
        </div>
    );
};

export default Homepage;
