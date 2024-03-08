import React from 'react';

const Part = (props) => {
    const {part} = props;
    return (
      <div>
        <p>{part.part}  {part.exercises}</p>
      </div>
    );
  }

export default Content;
