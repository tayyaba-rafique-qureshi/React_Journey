import { useEffect, useState } from 'react'
import './App.css'
import { use } from 'react';

function App() {
   const[count,setCount]=useState(0);
   const[total,setTotal]=useState(1);

   function handleClick(){
    setCount(count+1);
   }
     function handletotal(){
    setTotal(total+1);
   }


  //first is the side effect function logic eg making a db conn 
  //second is the cleanup function eg preventing memory leak when the component unmounts from the UI so we remove that component
  //third is comma seperated dependency list we mention some enitites and basis of those entitites eg variable the  side effect function will be called


  // variations of useEffect
  // 1. runs on every render 
  
//  useEffect(() => {
//   //this useeffect will run on each render
//   //when the count value is updated it will render before the value is rendered on screen each time
//   alert("I will run on each render");
//  })

  //2. that runs only on first render
  //in this case there will be dependency list present but empty
  // useEffect(() => {
    
  // //now this will not run when count is updated it just runs when website renders first time
  // alert("i will run on only first render");
  // }, [])

  //3. variation 3 dependency list present and contains some entity
  // useEffect(() => {
   
  // alert("I will run everytime the count value is updated");
  // //it will also run when count is initialize to 0
  // }, [count])
  

  //4. variation 4 : multiple dependcy enitites
  // useEffect(() => {
  // alert("I will run everytime when count/total is updated");
  
  // }, [count,total])
  

  // 5. variation 5 lets add clean up function
  // useEffect(() => {
  //   alert("Count is Updated");
  
  //   return () => {
  //     alert("count is unmounted from ui");
  //   }
  // }, [count])
  
 
  return (
   <div>
    <button onClick={handleClick}>Update Count</button>
       <h1>Count is: {count}</h1>
        <button onClick={handletotal}>Update Total</button>
           <h1>Total is: {total}</h1>

   </div>
  )
}

export default App

// we can write effects of an event using useEffect
// example: when dom content is loaded (event) -> make connection with db (effect)
//eg: when counter is updated (event) -> (effect) show a toastbox
//learnt about strict mode