import React, { useState } from 'react';

import { fetchWeather } from './api/fetchWeather';
import './App.css';
import navbar from './navbar';
const App = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});
    
    const search = async (e) => {
        if(e.key === 'Enter') {
            let data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
            console.log(data);
        }
    }
    return (
        
        <div className="main-container"><div><img src="https://cdn4.iconfinder.com/data/icons/unigrid-multimedia/60/020_cloud_data_storage-512.png" height="50px" width="50px"></img> <h1>Weather App</h1></div>
            <input type="text"className="search"placeholder="Search..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
            {weather.main && (

                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>

                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>

                    </div>
                    <div className="info">
                        <p>{weather.weather[0].description}</p>

                    </div>
                    <h2 className="info">
                        <span>lon : {weather.coord.lon}</span>
                        
                    </h2>
                    <h2 className="info">
                        <span>lat : {weather.coord.lat}</span>
                        
                    </h2>

                    <h2 className="city-wind">
                        <span>wind speed {weather.wind.speed}</span>
                        
                    </h2>
                </div>

            )}
        </div>
    );
}

export default App;