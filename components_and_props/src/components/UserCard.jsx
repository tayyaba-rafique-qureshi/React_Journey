import React from 'react'
import linkedin from '../assets/linkedin.jpeg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
    <p id='username'>{props.name}</p>
    <img id='userimg' src={props.image} alt={props.name} />
    <p id='description'> {props.desc}</p>

    </div>
  )
}

export default UserCard