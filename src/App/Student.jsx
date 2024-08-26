import React from 'react'

function Student(props) {
  return (
    <div>
        <p>first : {props.name}</p>
        <p>second : {props.caste}</p>

    </div>
  )
}

export default Student