import React from 'react';
import Header from './Header'; 
import Content from './content';
import Total from './Total.jsx';

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {part: 'Fundamentals', exercises: '10' },
    {part: 'Using props to pass data', exercises: '7'},
    {part: 'State of a component', exercises: '14'}
  ]
  
    return (
      <div>
        <Header course={course} />
        <Content parts={parts}/>
        <Total parts={parts}/>
      </div>
    )

}

export default App