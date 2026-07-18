import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count,setCount] =useState(0)
  return (

    <div className='center-screen'>
        <div className='card'>
             <p id="para">You have clicked {count} times</p>
              <button id="counter-btn" onClick={()=> { setCount(count +1)}}>Click Me</button>

        </div>
        </div>
  )
}

export default Counter;