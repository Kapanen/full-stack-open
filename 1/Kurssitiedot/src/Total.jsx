import React from 'react';

const Total = (props) => {
    const {parts } = props;


    const totalexes = parts.reduce((total, part) => {
        return total + parseInt(part.exercises);
    }, 0);

  return (
    <div>
        <p>amount of all exercises is: {totalexes} </p>
    </div>
  );
}

export default Total;