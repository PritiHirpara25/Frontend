import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchProducts} from '../Redux/ProductSlice'
import ProductCard from '../Component/ProductCard'

const Shop = () => {
  
  const dispatch = useDispatch()

  const{status , items} = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  },[dispatch])

  console.log("status:",status);
  console.log("items",items);
  return (
    <div>
        {status === "Loading" && <p>Loading...</p>}
        {status === "successded" && 
        items.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
        {status === "failed" && <p>Failed to load product...</p>}
    </div>
  )
}

export default Shop