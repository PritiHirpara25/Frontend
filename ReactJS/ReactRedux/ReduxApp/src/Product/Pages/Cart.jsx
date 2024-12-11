import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cart_to_wishlist, empty_cart, remove_to_cart } from '../../Redux/Action'

const Cart = () => {

  const CartData = useSelector((state) => state.cart)
  // console.log(CartData)

  const dispatch = useDispatch()

  return (
    <div>
      <button className='btn' onClick={() => dispatch(empty_cart())}>Empty Cart</button>
      <div>
        <table className='m-10'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              CartData.map(item => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.thumbnail} alt="" className='size-28' />
                    </td>
                    <td>
                      <p>{item.title}</p>
                    </td>
                    <td>
                      <input type="number" className="border rounded w-16 text-center" />
                    </td>
                    <td>
                      <span>{item.price}₹</span>
                    </td>
                    <td>
                      {item.price}
                    </td>
                    <td>
                      <button className='removebtn' onClick={() => dispatch(remove_to_cart(item))}>Remove</button>
                      <button className='addbtn' onClick={() => dispatch(cart_to_wishlist(item))}>Add to Wishlist</button>
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Cart