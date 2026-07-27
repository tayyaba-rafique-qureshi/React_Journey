import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [time, setTime] = useState(0);

  let timerRef=useRef(null);
  function startTimer(){
    //on EACH setTime re render happens so we will store value of setInterval into a useRef variable so that across re renders its value persists Use Case 1
    timerRef.current= setInterval(()=> {setTime(time=> time+1)},1000)

  }
  function stopTimer(){
   
    clearInterval(timerRef.current);
    timerRef.current=null;
  }
  function resetTimer(){
   stopTimer();
   setTime(0);
  }
  return (
   
       <div>
        <h1>StopWatch: {time} seconds</h1>

        <div className='Buttons'>

        <button onClick={startTimer}>
          Start Timer
        </button>
        <br />

        <button onClick={stopTimer}>Stop Timer</button>
        <br />

        <button onClick={resetTimer}>Reset</button>

        </div>
       
       </div>
  )
}

export default App
