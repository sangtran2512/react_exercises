const Header = ({course}) => {
  return <h1>{course}</h1>
}
const Content = ({parts, exercises}) => {
  return (
    <div>
      <p>Part: {parts[0]} has {exercises[0]} exercises</p>
      <p>Part: {parts[1]} has {exercises[1]} exercises</p>
      <p>Part: {parts[2]} has {exercises[2]} exercises</p>
    </div>
  )
}
const Total = ({exercises}) => {
  return (
    <h3>Total exercises: {exercises[0] + exercises[1] + exercises[2]}</h3>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1, part2, part3];
  const exercises = [exercises1, exercises2, exercises3];
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App