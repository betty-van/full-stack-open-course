import React from 'react'
import Button from './Button'

// Display the name of each person on render
const Person = ({persons, setPersons, newFilter, setErrorMessage, setSuccessMessage}) => {

    const personsToShow = persons.filter(person => person.name.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1)
    const rows = () => personsToShow.map(person => 
        <p key={person.id}> {person.name} {person.number} <Button person={person} persons={persons} setPersons={setPersons} setErrorMessage={setErrorMessage} setSuccessMessage={setSuccessMessage} /></p>
    )
    
    return (rows())
}

export default Person
