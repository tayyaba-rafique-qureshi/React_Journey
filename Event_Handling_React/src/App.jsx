import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert("I am Clicked");
  }
  function handleMouseOver(){
    alert("Good job you hovered on me");
  }
  
  function handleInputChange(e){

    // console.log("Input has been changed")
    console.log("Value till now:", e.target.value);
  }

  function handleSubmit(e){
    // we prevent default behavior of submit button like reload or sending req to server
    e.preventDefault();
    alert("Are you sure you want to submit the form?");
  }
  return (
   
        <div>
          {/* following line passes the reference of function rather invocating it immediately  */}
         <button onClick={()=> alert("Button is Clicked")} >Click ME</button>
        {/* important interview question the follwing line of code is immediate invocation means without clikcing the button the alert is generated so we need to write the event handler like above line */}
          {/* <button onClick={alert("Button is Clicked using Immediate Invocation")}>Click Me</button> */}
          
          
        {/* 2. handle submit using prevent default  */}
          {/* <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> handleInputChange(e)} />
            {/* <input type="text" onChange={handleInputChange} /> 
            <button type="submit">Submit</button>
          </form> */}
         
         
          {/*  1. how to respond for events we are going to learn that
          <button onClick={handleClick}>Click karo</button>
          <p onMouseOver={handleMouseOver}>Hover on me!</p> */}
        </div>
  )
}

export default App


// what i learnt in this lecture 
// 1. event handling 
// 2. immediate invokation
// 3. event.stopPropagation and event.preventDefault
// 4. read documentation of react handling events