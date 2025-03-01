import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../Redux/CartSlice'

const ProductCard = ({product}) => {

    const dispatch = useDispatch()

    const cartData = useSelector(state => state.cart)

    const add = cartData.some((item) => item.product_id === product.product_id);

  return (
    <div className='bg-pink-400 m-5 w-96 p-4'>
        <ul>
            <li>{product.name}</li>
            <li>{product.description}</li>
            <li>{product.category}</li>
            <li>{product.age}</li>
            <button className='bg-green-400 p-2 my-2 cursor-pointer' onClick={add ? ()=>dispatch(removeToCart(product.product_id)) :() => dispatch(addToCart(product))}>
            {add ? "Remove" : "Add"}
            </button>
        </ul>
    </div>
  )
}

export default ProductCard