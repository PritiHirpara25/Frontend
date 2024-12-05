import React from 'react'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  const WishData = useSelector((state) => state.cart)
  console.log(WishData)

  return (
    <div>
      {
        WishData.map(item => {
          return(
            <ul>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
          )
        })
      }
    </div>
  )
}

export default Wishlist