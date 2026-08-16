import { useState } from 'react'
import Navbar from './components/Navbar';
import ViewPaste from './components/ViewPaste';
import Paste from './components/Paste'
import Home from './components/Home';
import { RouterProvider } from 'react-router-dom';
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // ← add this

const router = createBrowserRouter(
  [
    {path: "/",
      element: 
      <div>
        <Navbar/>
        <Home/>
      </div>
      
    },
    {
      path: "/pastes",
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    }
    ,
    {
      path: "pastes/:id",
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    },
    
  ]
);
function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <RouterProvider router ={router}/>
     <ToastContainer />

  </div>
  )
}

export default App
