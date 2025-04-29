
const Header = ({props}) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  )
}

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Content = ({parts}) => {
  
  return (
    <>
      <Part name={parts.parts[0].name} exercises={parts.parts[0].exercises}/>
      <Part name={parts.parts[1].name} exercises={parts.parts[1].exercises}/>
      <Part name={parts.parts[2].name} exercises={parts.parts[2].exercises}/>
    </>
  )
}

const Total = ({parts}) => {
  return(
    <>
      <p>Number of exercises {parts.parts[0].exercises + parts.parts[1].exercises + parts.parts[2].exercises}</p>
    </>
  )
  

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header props={course}/>
      <Content parts={course}/>
      <Total parts={course}></Total>
    </div>
  )
}

export default App