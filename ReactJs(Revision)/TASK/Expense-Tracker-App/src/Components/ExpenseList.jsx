import React, { useState } from 'react'

const ExpenseList = () => {

  const [addExpense , setAddExpense] = useState([])

  return (
    <div>
      {
        addExpense.map((item) => {
          return(
            <div>
              <p>{}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default ExpenseList