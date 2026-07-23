import React from 'react'
import { useState, useEffect } from 'react';

const MultiEffectComponent = () => {
  const [count,setCount]=useState(0);
  const [seconds, setSeconds] =useState(0);

  useEffect(() => {
    console.log("Count Changed", count);
  
  }, [count]);
  //dep list has count so it will run everytime count is changed
  

  useEffect(() => {
    const intervalId = setInterval(()=>{
      console.log("Set interval started");
      setSeconds(prevSeconds => prevSeconds+1);
    }, 1000);
  
    return () => {
      console.log("Time to stop");
      clearInterval(intervalId);
    }
  }, []);
  //it will only render on first  render and reloads and updates like count changed 
  
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> setCount(count+1)}> Increment Counter</button>
      <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default MultiEffectComponent