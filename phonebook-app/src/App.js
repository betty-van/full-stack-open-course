import React, { useState } from 'react';

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

    // Display the name of each person on render
    const rows = () => personsToShow.map(person => <p key={person.id}>{person.name} {person.number}</p>)

    // To add name
    const addName = (event) => {
        // No reload
        event.preventDefault()
        
        // Take out names into an array
        const names = persons.map(person => person.name)

        // If name matches, then do not add to list
        if (names.indexOf(newName) !== -1) {
            alert(`${newName} already exists in the phonebook`)
            setNewName('')
            setNewNumber('')
        }
        // If name does not exist, add to list
        else if (names.indexOf(newName) === -1) {
            const nameObject = {
                name: newName,
                id: persons.length + 1,
                number: newNumber
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
            setNewNumber('')
        }

        
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setNewFilter(event.target.value)
    }

    // Check for letters of each name for filter
    // Making names lowercase and filter to lowercase to match
    const personsToShow = persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)

    return (
        <div>
            <h1>Phonebook</h1>
            <div>
                filter shown with a <input value={newFilter} onChange={handleFilterChange} />
            </div>
            <h2>add a new phone number</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {rows()}
            
        </div>
        
    )
}

export default App