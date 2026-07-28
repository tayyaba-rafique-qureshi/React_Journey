import { useState, useMemo} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  //when count updates the component gets re rendered means the code runs again and the function is called which makes the app slower to update ui even though value is always 8 the same
  const [count, setCount] = useState(0);
  const [input,setInput]=useState(0);
  function expensiveTask(num){
    console.log("inside expensive task");
    for(let i=0; i<=1000000000; i++){
    }
    return num*2;

  }

  let doubleValue= useMemo(() => expensiveTask(input), [input]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> {setCount(count+1)}}>Increment</button>
      <input type="number"
      placeholder='Enter Number' 
      value={input}
      onChange={(e) => setInput(e.target.value)}/>
      <div>Double: {doubleValue}</div>
    </div>
  )
}

export default App
