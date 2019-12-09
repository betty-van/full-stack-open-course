import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Results from './components/Results'


const App = () => {
    const [country, setCountry ] = useState('')
    const [results, setResults] = useState([])

    useEffect(() => {
        axios  
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                console.log(response.data)
                setResults(response.data)
            })
    }, [])

    const handleCountryChange = (event) => {
        setCountry(event.target.value)
    }

    return (
        <>
            find countries <input value={country} onChange={handleCountryChange} />
            <Results results={results} country={country} />
        </>
    )
}

export default App