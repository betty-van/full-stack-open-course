import React, {useState} from 'react'
import ReactDOM from 'react-dom'

/*Commplex state & debugging apps */

const App = (props) => {
    const [value, setValue] = useState(10)

    const setToValue = (newValue) => {
        setValue(newValue)
    }

    const Button = (props) => (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )

    const hello = (who) => () => {
            console.log('hello', who)
        }

    const Display = (props) => <div>{props.value}</div>

    return (
    <div>
        <Button handleClick={() => setToValue(1000)} text='1000' />
        <Button handleClick={() => setToValue(0)} text='reset' />
        <Button handleClick={() => setToValue(value + 1)} text='add one' />
        <Display value={value} />
    </div>
    )
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
)



// const History = (props) => {
//     if (props.allClicks.length === 0) {
//         return (
//             <div>
//                 the app is  used by pressing the buttons
//             </div>
//         )
//     }

//     return (
//         <div>
//             button press history: {props.allClicks.join(' ')}
//         </div>
//     )
// }

// const Button = ({ onClick, text}) => (
//     <button onClick={onClick}>
//         text
//     </button>
// )
// const App = (props) => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)
//     const [allClicks, setAll] = useState([])

//     const handleLeftClick = () => {
//         setAll(allClicks.concat('L'))
//         setLeft(left + 1)
//         console.log('clicks', allClicks)
//     }

//     const handleRightClick = () => {
//         setAll(allClicks.concat('R'))
//         setRight(right + 1)
//         console.log('clicks', allClicks)
//     }

//     return (
//         <div>
//             <div>
//                 {left}
//                 <Button onClick={handleLeftClick} text='left' />
//                 <Button onClick={handleRightClick} text='right' />
//                 {right}
//                 <History allClicks={allClicks} />
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

// const App = (props) => {
//     const [clicks, setClicks] = useState({
//         left: 0, right: 0
//     })

//     const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1})
//     const handleRightClick = () => setClicks({ ...clicks, right: clicks.right + 1})

    

//     return (
//         <div>
//             <div>
//                 {clicks.left}
//                 <button onClick={handleLeftClick}>left</button>
//                 <button onClick={handleRightClick}>right</button>
//                 {clicks.right}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )




// const App = (props) => {
//     const [left, setLeft] = useState(0)
//     const [right, setRight] = useState(0)

//     return (
//         <div>
//             <div>
//                 {left}
//                 <button onClick={() => setLeft(left + 1)}>
//                     left
//                 </button>
//                 <button onClick={() => setRight(right + 1)}>
//                     right
//                 </button>
//                 {right}
//             </div>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )


/* Simple use of state */
// const Display = ({counter}) => <div>{counter}</div>

// const Button = ({onClick, text}) => (
//     <button onClick={onClick}>
//         {text}
//     </button>
// )


// const App = (props) => {
//     const [ counter, setCounter ] = useState(0)

//     const setToValue = (value) => setCounter(value)

//     return (
//         <div>
//             <Display counter={counter} />
//             <Button 
//                 onClick={() => setToValue(counter + 1)}
//                 text='+'
//             />
//             <Button 
//                 onClick={() => setToValue(0)}
//                 text='zero'
//             />
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )

// const App = (props) => {
//     const {counter} = props
//     return (
//         <div>{counter}</div>
//     )
// }

// let counter = 1

// const refresh = () => {
//     ReactDOM.render(
//         <App counter={counter} />,
//         document.getElementById('root')
//     )
// }

// setInterval(() => {
//     refresh()
//     counter += 1
// }, 1000)




// // Using props as parameters to components
// // Component names must be capitalized
// const Hello = ({name, age}) => {
//     const bornYear = () => new Date().getFullYear() - age 

//     return (
//         <div>
//             <p>Hello {name}.</p>
//             <p>You are {age} years old.</p>
//             <p>So you were probably born in {bornYear()}</p>
//         </div>
//     )
// }

// const Footer = () => {
//     return (
//         <div>
//             greeting app created by <a href="https://betty-van.github.io/">Betty Van</a>
//         </div>
//     )
// }

// // Can also use fragments, wrapping elements to be returned by the component with empty element, this one no longer contains EXTRA div element
// const App = () => {
//     const name = "Peter"
//     const age = 10

//     return (
//         <>
//             <h1>Greetings</h1>
//             <Hello name={name} age={age} />
//             <Hello name="Maya" age={26+10} />
//             <Footer />
//         </>
//     )
// }

// Can use an array instead of using a root element
// const App = () => {
//     return [
//         <h1>Greetings</h1>,
//         <Hello name="Maya" age='45' />,
//         <Footer />
//     ]
// }

// const App = () => {
//     const name = "Peter"
//     const age = 10
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="George" age = {26+10} />
//             <Hello name="Daisy" age ='38' />
//             <Hello name={name} age={age} />
//         </div>
//     )
// }


// const Hello = () => {
//     return (
//         <div>
//             <p>Hello World</p>
//         </div>
//     )
// }

// // Using the function Hello within the App function
// const App = () => {
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello />
//             <Hello />
//             <Hello />
//         </div>
//     )
// }

// Can dynamically use variables using JSX
// const App = () => {
//     console.log('Hello from component')
//     const now = new Date()
//     const a = 10
//     const b = 20

//     return (
//         <div>
//             <p>Hello World, it is {now.toString()}</p>
//             <p>
//                 {a} plus {b} equals {a + b}
//             </p>
//         </div>
//     )
// }


// This is the longer version of below
// const App = () => {
//     return (
//         <div>
//             <p>Hello World</p>
//         </div>
//     )
// }


// The parenthesis means that it is returning what is inside
// const App = () = (
//     <div>
//         <p>Hello World</p>
//     </div>
// )

// ReactDOM.render(<App/>, document.getElementById('root'))
