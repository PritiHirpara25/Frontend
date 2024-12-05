import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart_to_wishlist } from '../../Redux/Action'

const Cart = () => {

  const CartData = useSelector((state) => state.cart)
  console.log(CartData)

  const dispatch = useDispatch()

  return (
    <div  className='bg-gray-300 w-max m-2 p-3'>
      {
        CartData.map(item => {
          return (
            <>
            <ul key={item.id}>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
            <button className='btn' onClick={() => dispatch(cart_to_wishlist(item))}>Add to Wishlist</button>
            </>
          )
        })
        }
    </div>
  )
}

export default Cart