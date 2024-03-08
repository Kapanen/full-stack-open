import React from 'react';
import P1 from './p1.jsx'; 
import P2 from './p2.jsx';
import P3 from './p3.jsx';

const Content = (props) => {
  const { parts } = props;

  return (
    <div>
      {parts.map((part, index) => {
        return <Part key={index} part={part} />;
      })}
    </div>
  );
}

export default Content;
