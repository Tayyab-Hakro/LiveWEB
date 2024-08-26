import React from 'react'
import Student from './Student'

function School(props) {
  return (
    <div>School
        <p>Name = {props.name}</p>
        <p>Name = {props.caste}</p>
        <Student/>

    </div>
  )
}

export default School