import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const anecdotesLength = props.anecdotes.length
    const [points, setPoints] = useState(
        new Array(anecdotesLength + 1).join('0').split('').map(parseFloat)
    )


    
    const randomQuote = (props) => {
       let randomNum = Math.floor(Math.random() * anecdotesLength) 
       setSelected(randomNum) 
    }

    const addVote = (props) => {
        // Cannot do this, look over lecture
        const copy = { ...points}
        copy[selected] += 1
        setPoints(copy)
        console.log('points', points)
    }

    return (
        <div>
            {props.anecdotes[selected]}<br></br>
            has {points[selected]} votes<br></br>
            <Button handleClick={addVote} text='vote' /> 
            <Button handleClick={randomQuote} text='random quote' />  
        </div>
    )


}

const Button = (props) => (
    <button onClick={props.handleClick} >
        {props.text}
    </button>
)



const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]


ReactDOM.render(
    <App anecdotes={anecdotes} />, 
    document.getElementById('root')
);


