import { useState } from 'react'
import Button from "./components/Button.jsx"

import './App.css'
import Card from "./components/Card.jsx"
function App() {
      const[count,setCount]=useState(0);
       function handleClick() {
        setCount(count+1); }

  return (
   <div>
       <Button incrementCount={handleClick}   text="CLICK ME" >
            <h1>{count}</h1>
       </Button>
    {/* 
  <Card name="love babbar">
    from line 11 to Card closing tag all are children of card 
    <h1>I am Child 1</h1>
    <p>I am Child 2</p>
    <span>I am child 3</span>
    to use them just write props.children 
  </Card>
  
  <Card children="i am also a child">
    { <p>main b child hun</p>  this overwrites the child in the tag and shows itself instead of that when present }
    usecase of children as we dont know what type of data is coming we just need to write props 
    we need higher order components or wrappers then we will use props.children 
  </Card> 
*/}
   </div>
  )
}

export default App
