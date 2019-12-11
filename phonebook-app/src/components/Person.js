import React from 'react'
import Button from './Button'

// Display the name of each person on render
const Person = (props) => {

    const personsToShow = props.persons.filter(person => person.name.toLowerCase().indexOf(props.newFilter.toLowerCase()) !== -1)
    const rows = () => personsToShow.map(person => 
        <p key={person.id}> {person.name} {person.number} <Button person={person} persons={props.persons} setPersons={props.setPersons} /></p>
    )
    
    return (rows())
}

export default Person
