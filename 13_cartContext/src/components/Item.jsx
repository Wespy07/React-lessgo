import React from 'react'

function Item(props) {
  return (
    <div className='border rounded-lg py-3 mt-3'>
        <h4>{props.title}</h4>
        <p>Price: Rs {props.price}</p>
        <button className='bg-gray-500'>Add to Cart</button>
    </div>
  )
}

export default Item