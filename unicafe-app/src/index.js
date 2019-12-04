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

const Display = (props) => (
    <>
        <p>{props.good}</p>
        <p>{props.neutral}</p>
        <p>{props.bad}</p>
    </>
)



ReactDOM.render(<App />, document.getElementById('root'));

