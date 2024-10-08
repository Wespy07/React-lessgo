import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const params = useParams()
    // console.log(params)
    
  return (
    <h2>Username is {params.username}</h2>
  )
}

export default User