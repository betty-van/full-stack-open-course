import React, { useState } from 'react';
import Person from './components/Person'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
      ])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ newFilter, setNewFilter ] = useState('')

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