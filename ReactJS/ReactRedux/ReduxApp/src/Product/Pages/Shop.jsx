import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import product_set from '../../Redux/ProductAction'

const Shop = () => {

  const ProductData =  useSelector((state) => state.productset)
  console.log('ProductData',ProductData)

  const product = {
    id:1,
    name:"Laptop",
    color:"Grey",
    price:70000
  }

  const dispatch = useDispatch()

  return (
    <div>
      <button onClick={() => dispatch(product_set(product))}>Click for Shop</button>
      {
        ProductData.map(item => {
          return(
            <ul key={id}>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
          )
        })
      }
      <button>Add to </button>
    </div>
  )
}

export default Shop