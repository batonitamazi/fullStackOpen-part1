


const Header = (props) => {
  const {course} = props
  return(
    <h1>{course}</h1>
  )
}

const Total = (props) => {
  const {total} = props
  return(
    <p>Number of exercises {total[0].exercises + total[1].exercises + total[2].exercises}</p>
  )
}
const Content = (props) => {
  const {parts} = props
  console.log(parts)
  return(
    <div>
      <Part name={parts[0].name} exercise={parts[0].exercise}/>
      <Part name={parts[1].name} exercise={parts[1].exercise}/>
      <Part name={parts[2].name} exercise={parts[2].exercise}/>
    </div>
  )
}
const Part = (props) => {
  const {name, exercise} = props
  return(
    <p>{name} {exercise}</p>
  )
}


function App() {
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
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts}/>
    </div>
  );
}

export default App;
