import React, { useState } from 'react';


const Napit = ({ goodClick, neutralClick, badClick }) => (
  <div>
    <button onClick={goodClick}>good</button>
    <button onClick={neutralClick}>neutral</button>
    <button onClick={badClick}>bad</button>
  </div>
);


const Stats = (props) => {

  const total = props.good + props.neutral + props.bad;
  const average = total.props === 0 ? 0 : (props.good - props.bad)/total
  const positive = total.props === 0 ? 0 : Math.min(100, props.good / total * 100)

  return(
    <div>
      <h1> Statistics </h1>
      {
        total === 0 ? <p>No feedback given</p> : 
        <table>
          <tbody>
        <tr>
          <td>
            <p>good</p>
            <p>neutral</p>
            <p>bad</p>
            <p>all</p>
            <p>average</p>
            <p>positive</p>
          </td>
          <td>
            <p>{props.good}</p>
            <p>{props.neutral}</p>
            <p>{props.bad}</p>
            <p>{isNaN(total) ? 0 : total}</p>
            <p>{isNaN(average) ? 0 : average.toFixed(2)}</p>
            <p>{isNaN(total) ? 0 : positive.toFixed(2)}%</p>
          </td>

        </tr>
        </tbody>
        </table>
        
      }
    </div>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handlegoodClick = () => {
      setGood(good + 1);
    };
  
    const handleNeutralClick = () => {
      setNeutral(neutral + 1);
    };
  
    const handleBadClick = () => {
      setBad(bad + 1);
    };  

  return (
    <div>
      <h1> Give feedback </h1>
      <Napit 
        goodClick={handlegoodClick}
        neutralClick={handleNeutralClick}
        badClick={handleBadClick}
      />
      <Stats good={good} neutral={neutral} bad={bad}/>
    </div>

  );

}
export default App
