import React from 'react'

export default function ChildComponent(props) {
    const namesOfBoys = props.names;
  return (
    <div>
        <p>This is the Child Component {namesOfBoys}</p>
        {namesOfBoys.map((name) => (
            <p>{name}</p>
        ))}
      
    </div>
  );
}

