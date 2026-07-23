import React, { useState,useEffect } from 'react'

const ResizeComponent = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize=() => setWindowWidth(window.innerWidth);
    console.log("Event Listener Added");
    window.addEventListener("resize",handleResize);

  
    return () => {
      console.log("Event Listener Removed");
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  //it will only run on first render empty list
  // Added     ← first mount
  // Removed   ← unmount (Strict Mode test)
  // Added     ← real mount
  return (
    <div>
      <h1>Window width: {windowWidth}px</h1>
    </div>
  )
}

export default ResizeComponent