import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import product_set from '../../Redux/ProductAction'
import { add_to_cart } from '../../Redux/Action'

const Shop = () => {

  const ProductData = useSelector((state) => state.productset)
  console.log('ProductData', ProductData)

  const CartData = useSelector((state) => state.cart)
  console.log('CartData', CartData)

  const product =[
    {
      id: 1,
      name: "Laptop",
      color: "Grey",
      price: 70000
    },
    {
      id: 2,
      name: "Mobile",
      color: "Black",
      price: 50000
    },
    {
      id: 3,
      name: "Power Bank",
      color: "White",
      price: 10000
    },
    {
      id: 4,
      name: "Bluetooth",
      color: "blue",
      price: 30000
    },
    {
      id: 5,
      name: "Tablet",
      color: "Emrald Green",
      price: 100000
    }
  ] 

  const dispatch = useDispatch()

  return (
    <div>
      <button className='btn' onClick={() => dispatch(product_set(product))}>Click for Shop</button><br />
      {
        ProductData.flat().map((item, index) =>
        (
          <div className='bg-gray-300 w-max m-2 p-3'>
            <ul key={index}>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
            <button className='btn' onClick={() => dispatch(add_to_cart(item))}>Add to Cart</button>
          </div>
        )

        )
      }
    </div>
  )
}

export default Shop