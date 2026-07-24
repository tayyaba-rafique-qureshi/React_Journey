import { useState, useContext, createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA';

//step 1 create context
const UserContext = createContext();

//step2 wrap all the child(potential consumer) inside a provider
//step 3 pass value
//step 4 consume value in a consumer
function App() {
  const [user, setUser] = useState({name: "Tayyaba"})

  return (
    <div>
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
       
    </div>
  )
}

export default App
export {UserContext}
