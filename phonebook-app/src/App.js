import React, { useState } from 'react';

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', number: '040-1234567', id: 1}
    ])

    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')

    // Display the name of each person on render
    const rows = () => persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)

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

    return (
        <div>
            <h2>Phonebook</h2>
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