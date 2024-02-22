import React from 'react';

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <p key={index}>{part.part} {part.exercises}</p>
      ))}
    </div>
  );
}

export default Content;