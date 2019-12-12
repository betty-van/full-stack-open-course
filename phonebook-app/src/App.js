import React, { useState, useEffect } from 'react';
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personsService from './services/persons'
import Notification from './components/Notification'
import Success from './components/Success'

import './index.css'

const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')
    const [ errorMessage, setErrorMessage] = useState(null)
    const [ successMessage, setSuccessMessage] = useState(null)

    useEffect(() => {
        personsService
        .getAll()
        .then(response => {
            console.log(response)
            setPersons(response)
        })
    }, [])
    

    if (persons === undefined) {
        return (
            <div>
                No persons in phonebook
            </div>
        )
    } else {
        return (
            <div>
                <h1>Phonebook</h1>
                <Notification message={errorMessage} />
                <Success message={successMessage} />
                <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
                <h2>add a new phone number</h2>
                <PersonForm newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} />
                <h2>Numbers</h2>
                <Person persons={persons} setPersons={setPersons} newFilter={newFilter} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} />
                
            </div>
            
        )
    }
    
}

export default App