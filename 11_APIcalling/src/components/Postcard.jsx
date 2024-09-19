import React from 'react'

function Postcard(props) {
  return (
    <div className='post-card-box'>
        <h2>{props.title}</h2>
        <p>{props.body}</p>
    </div>
  )
}

export default Postcard