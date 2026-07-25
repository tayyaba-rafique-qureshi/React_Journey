import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import ParamComponent from './components/ParamComponent';
import Courses from  './components/Courses'
import MockTests from  './components/MockTests'
import NotFound from './components/NotFound'

const router =createBrowserRouter(
  [
   {path:"/", 
    element:
    <div>
       <Home/>
       <Navbar/>
    </div>
   },
   {path:"/about", 
    element:
     <div>
       <About/>
       <Navbar/>
     </div>
   
   },
   {path:"/dashboard", 
    element: <div>
       <Dashboard/>
       <Navbar/>
     </div>,
     children:[
      {
      path:"courses",
      element: <Courses/>
      },
     {
      path:"mock-tests",
      element: <MockTests/>
      }

     ]
  
   },
   {
    path:"/student/:id",
    element:
    <div>
        <Navbar/>
         <ParamComponent/>

    </div>
   },{
    path:"*",
    element:<NotFound/>
   }

  ]

);

function App() {

  return (
    <div>
      
   <RouterProvider router ={router}/>

    </div>
  )
}

export default App
