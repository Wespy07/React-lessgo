import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import formatter from './NumberFormatter'

function Cart() {
  const cart = useContext(CartContext)
  const total = cart.items.reduce((a,b) => a + Number(b.price), 0)

  return (
    <div className='mt-3 bg-gray-900 py-4 rounded-lg text-xl font-semibold'>
      <h3 className='my-3'>Cart</h3>
      {
        cart && cart.items.map((item, index) => (
          <li key={index}>{item.name} - Rs {formatter.format(item.price)}</li>
          // console.log(item)
        ))
      }
      <h4 className='text-2xl'>Total: Rs <span className='font-extrabold'>{formatter.format(total)}</span></h4>
    </div>
  )
}

export default Cart