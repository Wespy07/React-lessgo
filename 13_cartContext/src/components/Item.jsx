import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import formatter from './NumberFormatter'

function Item(props) {
  const cart = useContext(CartContext)
  // console.log(cart)
  return (
    <div className='border rounded-lg py-3 mt-3'>
      <h4>{props.title}</h4>
      <p>Price: Rs {props.price}</p>
      <button className='bg-gray-500' onClick={() =>
        cart.setItems(
          [...cart.items, { name: props.title, price: props.price }]
        )}>Add to Cart
      </button>
    </div>
  )
}

export default Item