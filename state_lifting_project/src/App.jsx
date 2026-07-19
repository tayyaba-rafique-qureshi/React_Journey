import { useState } from 'react'


import './App.css'
import Card from "./components/Card.jsx"
function App() {
  const [count, setCount] = useState(0)


  
    const [name, setName] =useState('');
  return (
     //create state here
    //manage state here 
    //change state here
    //sync state to child components as well from here
  //by creating the state component in parent and passing the access of var and function to the childs we let them do work in sync
    <div>
      {/* let every child have state variable access as well as set that variable function setState as well */}
     <Card title= "card1" name={name} setName={setName}/>
          <Card title= "card2" name={name} setName={setName}/>

     {/* this was a practical where the change was happening in parent and going to child but now we will reverse it  */}
      {/* <p>I am inside parent and the value of name is {name}</p> */}
    </div>)


}

export default App
