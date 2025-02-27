const Header = ({ course }) => {
  return <h1>{course}</h1>
}

// Part component receives "name" and "exercises" as props
// "name" is actually an item from the "parts" array, passed down from Content
const Part = ({ name, exercises }) => {
  return (
    <p>Part: {name} has {exercises} exercises</p>
  )
} 

// Content receives "parts" and "exercises" arrays as props
// It passes each part name and corresponding exercises count to Part components
const Content = ({ parts, exercises }) => {
  return (
    <div>
      <Part name={parts[0]} exercises={exercises[0]} />
      <Part name={parts[1]} exercises={exercises[1]} />
      <Part name={parts[2]} exercises={exercises[2]} />
    </div>
  )
}

const Total = ({ exercises }) => {
  return (
    <h3>Total exercises: {exercises[0] + exercises[1] + exercises[2]}</h3>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component'] //1
  const exercises = [10, 7, 14]

  //2
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} /> 
      <Total exercises={exercises} />


      <Part name={parts[0]} exercises={exercises[0]} />

    </div>
  )
}

export default App
