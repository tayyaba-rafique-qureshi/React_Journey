import { useState, useEffect, useRef} from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let val= useRef(1);


  function handleIncrement(){
    val.current= val.current + 1;
    console.log("val:",val.current);
    setCount(count+1);
  }

    let btnRef = useRef();
  function changeColor(){
    btnRef.current.style.backgroundColor = "pink" ; 
  }

  //to verify count re renders on every update
  useEffect(() => {
    console.log("I have been rendered again");
    
  })
  
  return (
   
      <div>
        <button 
        ref={btnRef}
        onClick={handleIncrement}>Increment</button>
        <div>Count is: {count}</div>

        <button 
        onClick={changeColor}>Change Color of Increment</button>
      </div>
  )
}

export default App
