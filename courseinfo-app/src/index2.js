import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
        {
            name: 'Fundamentals of React',
            exercises:10,
            id: 1
        },
        {
            name: 'Using props to pass data',
            exercises: 7,
            id: 2
        },
        {
            name: 'State of a component',
            exercises: 14,
            id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
        }
    ]
}

    return (
        <>
            <Course course={course}  />
        </>
    )
}

const Course = ({course}) => {

    const Header = () => {
        return (
            <>
                <h1>{course.name}</h1>
            </>
        )
    }

    const Content = () => {

        const Part = () => course.parts.map(part =>
            <p key={part.id}> {part.name} {part.exercises}</p>
        )

        return (
            <>
                <Part course={course} />
            </>
        )
    }

    const Total = () => {
        const total = course.parts.reduce(function (sum, part) {
            return sum + part.exercises
        }, 0 )

        return (
            <>
                <p><b>total of {total} exercises</b></p>
            </>
        )
    }

    return (
        <>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </>
    )
}



ReactDOM.render(<App />, document.getElementById('root'))
