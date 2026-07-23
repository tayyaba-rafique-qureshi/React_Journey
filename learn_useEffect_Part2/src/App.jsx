import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LoggerComponent/>  //will run everytime the value is updated */}
      {/* <TimerComponent/>// will run only on first render and continues to update value */}
      {/* <DataFetcher/> //will render only on first render */}
      {/* <ResizeComponent/>      */}
       {/* Added     ← first mount
       Removed   ← unmount (Strict Mode test)
       Added     ← real mount */}

       <MultiEffectComponent/>
       {/* using multiple useEffects in one jsx file */}



    </div>
  )
}

export default App
