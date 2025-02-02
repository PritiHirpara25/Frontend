import React, { useContext } from 'react'
import { Context } from '../Context/ExpenseContext'

const ExpenseList = () => {

  const { expenseList, setExpenseList } = useContext(Context)
  console.log(expenseList)


  return (
    <div>
      {/* {
        expenseList.map((item , index) => {
          return(
            <div key={index}>
              <p>{item.addDescription}</p>
              <p>{item.addAmount}</p>
              <p>{item.addCategory}</p>
            </div>
          )
        })
      } */}
    </div>
  )
}

export default ExpenseList