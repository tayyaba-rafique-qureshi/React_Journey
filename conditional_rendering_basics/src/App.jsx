import { useState } from 'react'

import './App.css'
import LogoutButton from './components/LogoutButton'
import LoginButton from './components/LoginButton'

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
 
   // 4. using Early return
  if(!isLoggedIn){

    return(
      <LoginButton/>
    )
  }

  //   3. using logical operators
   return(
    <div>
      <h1>Welcome everyone!</h1>
      <div>
        {isLoggedIn && <LogoutButton/>}
      </div>
    </div>
   )


  //       2. Using Ternary Operator
  // return(

  //  <div>
  //   {isLoggedIn? <LogoutButton/> : <LoginButton/>}
  //  </div>

  // )
  //      1. conditional rendering using if else
  // if(isLoggedIn){
  //   return(

  //       <LogoutButton/>
  //   )
  // }
  // else{
  //   return(
  //       <LoginButton/>
  //   )
  // }
}

export default App
