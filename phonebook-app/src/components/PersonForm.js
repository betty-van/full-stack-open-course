import React from 'react'
import axios from 'axios'

const PersonForm = (props) => {

    // To add name
    const addName = (event) => {
        // No reload
        event.preventDefault()
        
        // Take out names into an array
        const names = props.persons.map(person => person.name)

        // If name matches, then do not add to list
        if (names.indexOf(props.newName) !== -1) {
            alert(`${props.newName} already exists in the phonebook`)
            props.setNewName('')
            props.setNewNumber('')
        }
        // If name does not exist, add to list
        else if (names.indexOf(props.newName) === -1) {
            const nameObject = {
                name: props.newName,
                id: props.persons.length + 1,
                number: props.newNumber
            }

            axios
                .post('http://localhost:3001/persons', nameObject)
                .then(response => {
                    console.log(response)
                })


            props.setPersons(props.persons.concat(nameObject))
            props.setNewName('')
            props.setNewNumber('')
        }

        
    }

    const handleNameChange = (event) => {
        props.setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        props.setNewNumber(event.target.value)
    }

    return (
        <>
            <form onSubmit={addName}>
                <div>
                    name: <input value={props.newName} onChange={handleNameChange} />
                </div>
                <div>number: <input value={props.newNumber} onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm