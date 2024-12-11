import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { empty_wishlist, remove_to_wishlist } from '../../Redux/Action'

const Wishlist = () => {

  const WishData = useSelector((state) => state.wishlist)
  console.log('wishdata', WishData)

  const dispatch = useDispatch()

  return (
    <div>
      <button className='btn' onClick={() => dispatch(empty_wishlist())}>Empty Wishlist</button>
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
              WishData.map((item) => {
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
                      <button className='btn' onClick={() => dispatch(remove_to_wishlist(item.id))}>Remove</button>
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

export default Wishlist