import React from 'react'
import Button from './Button'
import Weather from './Weather'

const Results = ({results, country, setCountry, weather, setWeather}) => {
    const countriesToShow = results.filter(result => result.name.toLowerCase().indexOf(country.toLowerCase()) !== -1)
    const rows = () => countriesToShow.map (result => 
        <div key={result.numericCode}> {result.name}
            <Button result={result} setCountry={setCountry} country={country} />
        </div>
    )

    if (countriesToShow.length > 10) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }

    else if (countriesToShow.length <= 10 && countriesToShow.length > 1) {
        return (rows())
    }
    else if (countriesToShow.length === 1) {
        const country = countriesToShow[0]

        return (
            <div>
                <h1>{country.name}</h1>
                <p>capital: {country.capital}</p>
                <p>population: {country.population}</p>
                <h2>languages</h2>
                <ul>
                    {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={country.flag} alt="{country.name} flag" width='500px' />
                <Weather weather={weather} setWeather={setWeather} country={country} />
            </div>
        )
    }
    else {
        return (
            <div>
                Enter something to search
            </div>
        )
    }
    
    
}

export default Results