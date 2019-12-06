import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [selected, setSelected] = useState(0)
    const anecdotesLength = props.anecdotes.length
    const [points, setPoints] = useState(
        new Array(anecdotesLength + 1).join('0').split('').map(parseFloat)
    )

    const randomQuote = () => {
       let randomNum = Math.floor(Math.random() * anecdotesLength) 
       setSelected(randomNum) 
    }

    const addVote = () => {
        const copy = { ...points}
        copy[selected] += 1
        setPoints(copy)
    }

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <div>
                <Display anecdotes={anecdotes} points={points} selected={selected} />
                <Button handleClick={addVote} text='vote' /> 
                <Button handleClick={randomQuote} text='random quote' />  
            </div>
            
            <h1>Anecdote with most votes</h1>
            <MostVoted points={points} anecdotes={anecdotes} />
        </div>
    )


}

const MostVoted = (props) => {
    let arr = Object.values(props.points)
    let max = Math.max(...arr)
    let keys = Object.keys(props.points)

    for (let key of keys) {
        if (props.points[key] === max) {
            return (
                <>
                    {props.anecdotes[key]} <br></br>
                    has {max} votes
                </>
            )

        }
    }
}

const Display = (props) => (
    <>
        {props.anecdotes[props.selected]}<br></br>
        has {props.points[props.selected]} votes<br></br>
    </>
)

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


