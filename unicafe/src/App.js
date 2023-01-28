import React, { useState } from 'react'


const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (<p>No feedback given</p>)
  }
  const total = good + bad + neutral;
  const average = (good - bad)/total
  const positive = good * 100/total
  return (
    <>
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
      <Statistic text="all" value={total} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </>

  )

}
const Statistic = ({ text, value }) => {
  if(text === 'positive'){
    return(<p>{text} {value}%</p>)
  }
  return (
    <p>{text} {value}</p>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
}

export default App;
