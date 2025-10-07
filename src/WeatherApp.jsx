import React from 'react'
import './App.css'
import SearchBox from './SearchBox.jsx'
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';


function WeatherApp() {

const [weatherInfo, setWeatherInfo]=useState({
     
});

let updateInfo =(newinfo)=>{
    setWeatherInfo(newinfo);
}

    return (  
        <>
        <div className='wapp'><h1>Weatherapp</h1></div>
       
        <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo}/>
        </>
    );
}

export default WeatherApp;