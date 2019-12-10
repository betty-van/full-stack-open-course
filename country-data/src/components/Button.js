import React from 'react'

const Button = ({result, setCountry}) => {
    const handleClick = () => setCountry(result.name)

    return (
        <button onClick={handleClick}>
            {result.name}
        </button>
    )
}
export default Button