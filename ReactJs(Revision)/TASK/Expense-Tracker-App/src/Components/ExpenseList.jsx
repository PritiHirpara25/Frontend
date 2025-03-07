import React, { useContext } from 'react'
import { AddExpenseContext } from '../Context/ExpenseProvider'

const ExpenseList = () => {

  const { expense } = useContext(AddExpenseContext)

  return (
    <div>
      {
        expense.map((item , index) => {
          return(
            <div key={index}>
              <p>{item.addDescription}</p>
              <p>{item.addAmount}</p>
              <p>{item.addCategory}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ExpenseList