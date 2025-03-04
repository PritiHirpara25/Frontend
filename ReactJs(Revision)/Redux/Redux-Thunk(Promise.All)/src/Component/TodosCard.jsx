import React from 'react'   
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/cartSlice";

const TodosCard = ({todos}) => {
  return (
    <div>
        <ul>
            <li>{todos.title}</li>
            {/* <li>{todos.age}</li> */}
            {/* <button onClick={() => useDispatch(addToCart(product))}>Add to Cart</button> */}
        </ul>
    </div>
  )
}

export default TodosCard