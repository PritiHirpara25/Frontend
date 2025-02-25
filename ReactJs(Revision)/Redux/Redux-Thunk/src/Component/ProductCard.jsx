import React from 'react'   
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/cartSlice";

const ProductCard = ({product}) => {
  return (
    <div>
        <ul>
            <li>{product.name}</li>
            <li>{product.age}</li>
            <button onClick={() => useDispatch(addToCart(product))}>Add to Cart</button>
        </ul>
    </div>
  )
}

export default ProductCard