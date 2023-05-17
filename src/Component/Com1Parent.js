import React from 'react'
import Comp2Child from "../Component/Comp2Child";

const names = ["Kingsley", "Abdul", "David", "Abel"];
const greeting = "Good evening";

export default function Com1Parent() {
  return (
    <div>
        < Comp2Child names={names} greeting={greeting}/>
      
    </div>
  );
}

