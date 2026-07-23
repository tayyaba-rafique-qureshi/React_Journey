import React, { useState,useEffect } from 'react'

const LoggerComponent = () => {
    const [count,setCount]=useState(0);

    useEffect(() => {
      console.log("Component Rendered or Count changed", count);
    });
    //will run on every update or render
  return (
    <div>
        
        <h1>Count: {count}</h1>
        <button onClick={()=> setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LoggerComponent