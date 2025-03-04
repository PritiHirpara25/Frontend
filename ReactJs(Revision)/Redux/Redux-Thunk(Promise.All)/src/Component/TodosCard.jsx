import React from 'react'   
import { useDispatch } from 'react-redux'
import { addToCart } from "../redux/cartSlice";

const TodosCard = ({todos}) => {
  return (
    <div>
        <ul>
            <li>{todos.title}</li>
        </ul>
    </div>
  )
}

export default TodosCard