import React, { useState,useEffect } from 'react'

const TimerComponent = () => {
    const [seconds,setSeconds]=useState(0);

    useEffect(() => {
      const intervalId =setInterval(() => {
        console.log("setInterval executed");
        setSeconds(prevSeconds=> prevSeconds +1);
      },1000); //will run after 1000ms 1sec
    
      return () => {
        console.log("time to stop");
        clearInterval(intervalId);
      }
    }, [])
    //it will run only on first render because empty dependency list
  return (

    <div>
        <h1>Seconds: {seconds}</h1>
    </div>
  )
}

export default TimerComponent