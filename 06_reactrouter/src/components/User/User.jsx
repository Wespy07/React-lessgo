import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    return (
        <div className='bg-gray-700 text-7xl text-center text-white p-16'>User: {userid}</div>
    )
}

export default User