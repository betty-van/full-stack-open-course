import React, {useEffect} from 'react'
import axios from 'axios'

const Weather = ({weather, setWeather, country}) => {
    

    setTimeout(() => {
        console.log(weather)
        return (
            <div>
                <h2>Weather in {country.capital}</h2>
                <p><b>temperature:</b> {weather.main.temp}</p>
                <p><b>wind: </b> </p>
            </div>
        )
    }, 2000)
   
}

export default Weather