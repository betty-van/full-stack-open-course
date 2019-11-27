import React from 'react'
import ReactDOM from 'react-dom'



// Using props as parameters to components
// Component names must be capitalized
const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}.</p>
            <p>You are {props.age} years old.</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            greeting app created by <a href="https://betty-van.github.io/">Betty Van</a>
        </div>
    )
}

// Can also use fragments, wrapping elements to be returned by the component with empty element, this one no longer contains EXTRA div element
const App = () => {
    const name = "Peter"
    const age = 10

    return (
        <>
            <h1>Greetings</h1>
            <Hello name={name} age={age} />
            <Footer />
        </>
    )
}

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

ReactDOM.render(<App/>, document.getElementById('root'))
