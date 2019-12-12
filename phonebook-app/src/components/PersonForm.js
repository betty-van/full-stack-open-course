import React from 'react'
import personsService from '../services/persons'

const PersonForm = ({persons, newName, newNumber, setNewName, setNewNumber, setPersons, setErrorMessage, setSuccessMessage }) => {

    // To add name
    const addName = (event) => {
        // No reload
        event.preventDefault()
        
        // Take out names into an array
        const names = persons.map(person => person.name)

        // If name matches, then do not add to list
        if (names.indexOf(newName) !== -1) {
            const result = window.confirm(`${newName} already exists in the phonebook, replace the old number with a new one?`)
            const thisPerson = persons.find(p => p.name === newName)
            const changedPerson = {...thisPerson, number: newNumber}
            
            if (result === true) {
                personsService
                    .update(thisPerson.id, changedPerson)
                    .then(response => {
                        console.log(response)
                        setPersons(persons.map(person => person.id !== thisPerson.id ? person : response))

                        setSuccessMessage(
                            `Updated '${newName} to ${newNumber}' `
                        )
                        setTimeout(() => {
                            setSuccessMessage(null)
                        }, 5000)
                    })
                    .catch(error => {
                        setErrorMessage(
                            `Unable to change number of '${thisPerson.name}'`
                        )
                        setTimeout(() => {
                            setErrorMessage(null)
                        }, 5000)
                    })

                setNewName('')
                setNewNumber('')
            }
        }
        // If name does not exist, add to list
        else if (names.indexOf(newName) === -1) {
            const nameObject = {
                name: newName,
                number: newNumber
            }

            personsService
                .create(nameObject)
                .then(response => {
                    setPersons(persons.concat(response))
                    setNewName('')
                    setNewNumber('')

                    setSuccessMessage(
                        `Added '${newName} ${newNumber}' `
                    )
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
                    })
                .catch(error => {
                    setErrorMessage(
                        `Unable to add '${newName}'`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
            } 
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    return (
        <>
            <form onSubmit={addName}>
                <div>
                    name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm