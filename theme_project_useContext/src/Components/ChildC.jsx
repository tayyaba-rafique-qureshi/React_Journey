import React from 'react'
import { ThemeContext } from '../App'
import { useContext } from 'react'
const ChildC = () => {
    const {theme,setTheme} = useContext(ThemeContext);
    function handleClick(){
        if(theme=="light"){
            setTheme("black");
           
        }
        else{
            setTheme("light");
        }
    }
  return (
    <div>
<button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC