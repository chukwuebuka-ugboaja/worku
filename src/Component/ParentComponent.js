import React from 'react'
import ChildComponent from "../Component/ChildComponent";

const names = ["Gideon", "John", "David", "Abel"];
const greeting = "Goodmorning";

export default function ParentComponent() {
  return (
    <div>
        < ChildComponent names={names} greeting={greeting}/>
      
    </div>
  );
}

