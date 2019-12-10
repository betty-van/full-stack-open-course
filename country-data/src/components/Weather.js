import React from 'react'
import axios from 'axios'

const Weather = ({weather, setWeather, country}) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&APPID=3bca3d8c8775b84aebeea5efc76051a7'
    
    const getWeatherInfo = async url => {
        const response = await axios(url)
        console.log('response data', response.data)
        setWeather(response.data)
    }
    
    getWeatherInfo(url);

    return (
        <div>
            <h2>weather in {country.capital}</h2>
            <p><b>temperature: {weather.main.temp}</b></p>
            <p><b>wind: </b> {weather.wind} </p>
        </div>
    )   
    
}

export default Weather