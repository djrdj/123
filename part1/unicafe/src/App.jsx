import { useState } from 'react'

const Statistics = ({numbers}) => {
  let all = 0, average = 0, positive = 0
  numbers.forEach(element => {
    all+=element
  })
  average=all/numbers.length
  positive=numbers[0]/all*100
  return (
    <div>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>setGood(good+1)}>good</button>
      <button onClick={()=>setNeutral(neutral+1)}>neutral</button>
      <button onClick={()=>setBad(bad+1)}>bad</button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics numbers={[good,neutral,bad]} />
    </div>
  )
}

export default App