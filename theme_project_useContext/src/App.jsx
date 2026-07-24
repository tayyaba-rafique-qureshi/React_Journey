import { useState, createContext ,useContext} from 'react'
import ChildA from './Components/ChildA';
import './App.css'
//step 1 create context
  const ThemeContext = createContext();

function App() {
  
  const [theme, setTheme] = useState('Light');
  return (
   <div>
   {/*step 2 wrap  */}
  <ThemeContext.Provider value={{theme,setTheme}}>
    <div id='container' style={{backgroundColor:theme=='light'? 'beige':'black'}}>

     <ChildA/>
    </div>
 
  </ThemeContext.Provider>
   </div>
  )
}

export default App
export {ThemeContext}
