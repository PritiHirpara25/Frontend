import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import product_set from '../../Redux/ProductAction'
import { add_to_cart, add_to_wishlist } from '../../Redux/Action'
import jsondata from '../../data.json'
import { useEffect } from 'react'

const Shop = () => {

  const ProductData = useSelector((state) => state.productset)
  // console.log('ProductData', ProductData)

  const CartData = useSelector((state) => state.cart)
  // console.log('CartData', CartData)

  const product = [
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

  useEffect(() => {
    dispatch(product_set(product))
  }, [])

  return (
    <div className='grid grid-cols-3 mx-32 my-20 gap-8'>
      {/* <button className='btn' onClick={() => dispatch(product_set(product))}>Click for Shop</button><br /> */}
      {/* {
        ProductData.flat().map((item) =>
        (
          <div key={item.id} className='bg-gray-300 w-max m-2 p-3'>
            <ul>
              <li>{item.name}</li>
              <li>{item.color}</li>
              <li>{item.price}</li>
            </ul>
            <button className='btn' onClick={() => dispatch(add_to_cart(item))}>Add to Cart</button>
          </div>
        )

        )
      } */}
      {
        jsondata.products.map(((item) =>
        (
          <div key={item.id} className='border-2 border-solid border-black p-5'>
            <ul>
              <li><img src={item.thumbnail} alt="" /></li>
              <li className='text-2xl'>{item.title}</li>
              <li className='text-gray-500 line-clamp-3'>{item.description}</li>
              <li className='font-semibold text-green-900'>{item.price} ₹</li>
              <li className='text-red-600'>{item.discountPercentage}%</li>
              <li>Instock : {item.stock}</li>
            </ul>
            <button className='addbtn' onClick={() => dispatch(add_to_cart(item))}>Add to Cart</button>
            <button className='addbtn' onClick={() => dispatch(add_to_wishlist(item))}>Add to Wishlist</button>
          </div>
        )
        ))
      }
    </div>
  )
}

export default Shop