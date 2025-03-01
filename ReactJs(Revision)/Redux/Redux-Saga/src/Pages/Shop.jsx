import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../Redux/ProductSlice';
import ProductCard from '../Component/ProductCard';

const Shop = () => {

  const dispatch = useDispatch();

  const productData = useSelector(state => state.product.items)
  
  useEffect(() => {
    dispatch(fetchProducts())
  },[dispatch])
  
  // console.log("ProductData:",productData)
  return (
    <div className='grid grid-cols-3'>
      {
        productData.map((product) => (
            <ProductCard product={product} key={product.product_id}/>
        ))
      }
    </div>
  )
}

export default Shop