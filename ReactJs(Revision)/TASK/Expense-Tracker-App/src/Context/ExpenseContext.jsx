import React from 'react'
import { createContext } from "react";

export const AddExpenseContext = createContext();
export const ListExpenseContext = createContext();

const ExpenseContext = () => {
  return (
    <div>
      <ExpenseContext.Provider>

      </ExpenseContext.Provider>
    </div>
  )
}

export default ExpenseContext