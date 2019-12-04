import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => setGood(good + 1)
    const handleNeutralClick = () => setNeutral(neutral + 1)
    const handleBadClick =() => setBad(bad + 1)

    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={handleGoodClick} text='good' />
            <Button handleClick={handleNeutralClick} text='neutral' />
            <Button handleClick={handleBadClick} text='bad' />

            <h1>statistics</h1>
            <Display good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Display = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const total = bad + good + neutral


    return (
        <>
            <p>{good}</p>
            <p>{neutral}</p>
            <p>{bad}</p>
            <p>all {good + bad + neutral}</p>
            <p>average {((good*1) + (neutral*0) + (bad* -1)) / total}</p>
            <p>positive {(good / total) * 100}%</p>
        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'));

