import React, { useState, useEffect } from 'react';
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
    const [persons, setPersons] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

    const hook = () => {
        axios   
            // server must be open to work
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    }

    useEffect(hook, [])

    return (
        <div>
            <h1>Phonebook</h1>
            <Filter newFilter={newFilter} setNewFilter={setNewFilter} />
            <h2>add a new phone number</h2>
            <PersonForm newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Person persons={persons} newFilter={newFilter} />
            
        </div>
        
    )
}

export default App