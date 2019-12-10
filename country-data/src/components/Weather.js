import React, {useEffect} from 'react'
import axios from 'axios'

const Weather = ({weather, setWeather, country}) => {

    const url = 'http://api.openweathermap.org/data/2.5/weather?q=' + country.capital + '&APPID=3bca3d8c8775b84aebeea5efc76051a7'
    
    useEffect(() => {
        axios  
            .get(url)
            .then(response => {
                setWeather(response.data)
            })
    }, [setWeather, country.capital, url])

    if (weather.length === 0) {
        return (
            <div>
                <h2>weather in {country.capital}</h2>
                <p>No weather data available</p>
            </div>
        )
    }
    else {
        const weatherIcon = 'https://openweathermap.org/img/wn/' + weather.weather[0].icon +'@2x.png'
        return (
            <div>
                <h2>weather in {country.capital}</h2>
                <p><b>temperature: </b> {parseInt((weather.main.temp - 273.15) * 1.8 + 32)} degrees Fahrenheit</p>
                <img src={weatherIcon} alt="weather icon" />
                <p><b>wind: </b> {parseInt(weather.wind.speed * 2.2369)} mph {weather.wind.deg} degrees </p>
            </div>
        )   
    }

    
    
}

export default Weather