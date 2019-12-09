import React from 'react'

const Filter = (props) => {

    const handleFilterChange = (event) => {
        props.setNewFilter(event.target.value)
    }

    return (
        <div>
                filter shown with a <input value={props.newFilter} onChange={handleFilterChange} />
        </div>
    )
}

export default Filter