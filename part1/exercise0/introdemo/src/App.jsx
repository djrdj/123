import React from "react"

// const Hello = (props) => {
//   console.log(props)
//   return  (
//     <div>
//       <p> Hello world {props.name}, you are {props.age} years old</p>
//     </div>
//   )
// }

const App = () => {
  // const friends = [
  //   { name: "Petar", age: 10},
  //   {name: "Jovan", age: 20}
  // ]

  const t=[1,2,3]
  const t2=t.concat(4)
  const [first,second, ...rest]=t2
  t2.forEach(element => {
    console.log(element)
  });
  console.log("ostatak ",rest)
  return (
    <>
      {/* <h1>Greetings</h1>
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p> */}
      {/* <Hello name='George' age={26+2}/>
      <Hello name={name} age={age}/> */}
      
    </>
  )
}

export default App
