import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cartdata = useSelector(state => state.Cart.initialCart)


  return (
    <div>
        {
          cartdata.map((item , index) => {
            return(
              <div key={index}>
                <h1>{item.name}</h1>
                <p>{item.age}</p>
                <p>{item.city}</p>
              </div>
            )
          })
        }
    </div>
  )
}

export default Cart