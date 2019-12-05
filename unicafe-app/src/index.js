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
            <Statistics good={good} bad={bad} neutral={neutral} />
        </div>
    )
}

const Button = (props) => (
    <button onClick={props.handleClick}>
        {props.text}
    </button>
)

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const total = bad + good + neutral

    if (total === 0) {
        return (
            <div>No feedback given</div>
        )
    }


    return (
        <table>
            <tbody>
                <tr><Statistic text='good' value={good} /></tr>
                <tr><Statistic text='neutral' value={neutral} /></tr>
                <tr><Statistic text='bad' value={bad} /></tr>
                <tr><Statistic text='all' value={total} /></tr>
                <tr><Statistic text='average' value={((good*1) + (neutral*0) + (bad* -1)) / total} /></tr>
                <tr><Statistic text='positive' value={((good / total) * 100) + '%'}  /></tr>
            </tbody>
        </table>
    )
}

const Statistic = ({value, text}) => (
    <> 
        <td>{text}</td>
        <td>{value}</td>
    </>
)





ReactDOM.render(<App />, document.getElementById('root'));

