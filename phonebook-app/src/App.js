import React, { useState } from 'react';

const App = () => {
    const [ persons, setPersons ] = useState([
        { name: 'Arto Hellas', id: 1}
    ])

    const [ newName, setNewName ] = useState('')

    const rows = () => persons.map(person => <p key={person.id}>{person.name}</p>)

    const addName = (event) => {
        event.preventDefault()
        
        const names = persons.map(person => person.name)

        if (names.indexOf(newName) !== -1) {
            alert(`${newName} already exists in the phonebook`)
            setNewName('')
        }
        else if (names.indexOf(newName) === -1) {
            const nameObject = {
                name: newName,
                id: persons.length + 1
            }

            setPersons(persons.concat(nameObject))
            setNewName('')
        }

        
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
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