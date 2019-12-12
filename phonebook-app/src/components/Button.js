import React from 'react'
import personsService from '../services/persons'

const Button = ({person, setPersons, persons, setErrorMessage, setSuccessMessage}) => {
    const handleClick = () => {
        const result = window.confirm(`Are you sure you want to delete ${person.name}?`)
        console.log(result)

        if (result === true) {
            personsService
                .remove(person.id)
                .then(response => {
                    console.log(`${person.name}`, response)
                })
                .then(() => {
                    const result = persons.filter(p => p.name !== person.name)
                    setPersons(result)

                    setSuccessMessage(
                        `Deleted '${person.name}' `
                    )
                    setTimeout(() => {
                        setSuccessMessage(null)
                    }, 5000)
                })  
                .catch(error => {
                    setErrorMessage(
                        `Unable to delete '${person.name}'`
                    )
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 5000)
                })
        }
    }


    return (
        <button onClick={handleClick}>
           delete
        </button>
    )
}
export default Button