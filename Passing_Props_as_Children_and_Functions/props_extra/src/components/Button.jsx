import React from 'react'

const Button = (props) => {
  return (
    <div>

 <button onClick={props.incrementCount}>

        {props.text}
        {props.children}
       </button> 

    </div>
      )
}

export default Button