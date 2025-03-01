import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../Component/ProductCard';

const Cart = () => {

  const cartData = useSelector(state => state.cart)
  // console.log("CartData:",cartData);

  return (
    <div>
      {
        cartData.map((item) => (
          <ProductCard key={item.product_id} product={item}/>
        ))
      }
    </div>
  )
}

export default Cart