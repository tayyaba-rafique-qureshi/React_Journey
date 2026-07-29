import { useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import { useCallback } from 'react';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0)

  // const handleClick = useCallback(() => {
  //       setCount(count+1);

  // },[count]);


  return (
   <div>
         <ExpensiveComponent/>

     {/* <div>
      Count: {count}
     </div>
     <div>
      <button onClick={handleClick}>Increment</button>
     </div>

     <div>
      <ChildComponent buttonName="Click Me"  handleClick={handleClick}/>
     </div> when we click increment the click me button meas child component also gets re rendered so we wrap the child component in react.memo so now whenever the click me props are changed it will be re rendered
     but if you are passing a function then react.memo wont be able to save you from re rendering
     because when parent component re renders the function also re created and the reference is changed, for child component it seems like both functions are different because of reference
     
     now we want to freeze the reference of function using usecallback on line 10 now we solved the first usecase of usecallback the un necessary re render of child component
     */}

   </div>
  )
}

export default App
