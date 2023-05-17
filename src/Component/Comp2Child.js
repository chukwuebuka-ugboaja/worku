import React from 'react';

export default function Comp2Child(props) {
    const children = props.names;
  return (
    <div>
        <p>This is the Child Component {children}</p>
        {children.map((name) => (
            <p>{name}</p>
        ))}
      
    </div>
  )
}
