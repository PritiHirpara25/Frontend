


import React, { useState, createContext } from 'react';

export const AddExpenseContext = createContext();

const ExpenseProvider = ({ children }) => {
  const [expense, setExpense] = useState([]);

  const [addExpense, setAddExpense] = useState({
    addDescription: '',
    addAmount: '',
    addCategory: '',
  });

  return (
    <AddExpenseContext.Provider value={{ expense, setExpense, addExpense, setAddExpense }}>
      {children}
    </AddExpenseContext.Provider>
  );
}

export default ExpenseProvider;