import React, { useState, createContext } from 'react';

export const Context = createContext();

const ExpenseProvider = ({ children }) => {

  const [expenseList, setExpenseList] = useState([]);

  const [expense, setExpense] = useState({
    addDescription: '',
    addAmount: '',
    addCategory: '',
  });

  return (
    <Context.Provider value={{ expenseList, setExpenseList, expense, setExpense }}>
      {children}
    </Context.Provider>
  );
}

export default ExpenseProvider; 