import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    const courses = [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
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
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]

    return (
        <>
            <h1>Web development curriculum</h1>
            <Course courses={courses}  />
        </>
    )
}

const Course = ({courses}) => {

    const Display = (course) => {

        const Header = ({course}) => (<h2 key={course.id}>{course.name}</h2>)

        const Content = ({course}) => {
            const Part = (course) => course.course.parts.map(part =>
                <p key={part.id}> {part.name} {part.exercises}</p>
            )
    
            return (
                <>
                    <Part course={course} />
                </>
            )
        }

        const Total = ({course}) => {
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
            <div key={course.id}>
                <Header course={course} />
                <Content course={course} />
                <Total course={course} />
            </div>
        )
        

    }

    return(courses.map(course => (Display(course))))

}



ReactDOM.render(<App />, document.getElementById('root'))
