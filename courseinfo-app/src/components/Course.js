import React from 'react'

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

export default Course
