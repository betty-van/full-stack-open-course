import React from 'react'

const Button = (props) => {
    const handleClick = () => props.setCountry(props.result.name)
    
    return (
        <button onClick={handleClick}>
            {props.result.name}
        </button>
    )
}
export default Button