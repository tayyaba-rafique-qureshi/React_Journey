import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import linkedin from "./assets/linkedin.jpeg"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
    <UserCard name="Tayyaba" desc="Desc1" image={linkedin} style={{borderRadius:"10px"}} />
    <UserCard name="Babbar" desc="Desc1"  image={linkedin} style={{borderRadius:"10px"}}/>
    <UserCard name="Samreen" desc="Desc1" image={linkedin} style={{borderRadius:"10px"}} />
    </div>
  )
}

export default App
