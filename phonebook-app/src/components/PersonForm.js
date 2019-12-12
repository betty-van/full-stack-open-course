import React from 'react'
import personsService from '../services/persons'

const PersonForm = (props) => {

    // To add name
    const addName = (event) => {
        // No reload
        event.preventDefault()
        
        // Take out names into an array
        const names = props.persons.map(person => person.name)

        // If name matches, then do not add to list
        if (names.indexOf(props.newName) !== -1) {
            const result = window.confirm(`${props.newName} already exists in the phonebook, replace the old number with a new one?`)
            const thisPerson = props.persons.find(p => p.name === props.newName)
            const changedPerson = {...thisPerson, number: props.newNumber}
            
            if (result === true) {
                personsService
                    .update(thisPerson.id, changedPerson)
                    .then(response => {
                        console.log(response)
                        props.setPersons(props.persons.map(person => person.id !== thisPerson.id ? person : response))
                    })

                props.setNewName('')
                props.setNewNumber('')
            }
        }
        // If name does not exist, add to list
        else if (names.indexOf(props.newName) === -1) {
            const nameObject = {
                name: props.newName,
                number: props.newNumber
            }

            personsService
                .create(nameObject)
                .then(response => {
                    props.setPersons(props.persons.concat(response))
                    props.setNewName('')
                    props.setNewNumber('')
                    })
                .catch(error => {
                    console.log('something went wrong', error)
                })
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