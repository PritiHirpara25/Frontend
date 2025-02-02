import React, { useContext } from 'react'
import { Context } from '../Context/ExpenseContext'

const ExpenseItem = () => {
  const { setExpense, expense, setExpenseList, expenseList } = useContext(Context);
  // console.log("obj:",obj);
  console.log('expense', expense)

  return (
    <>
      {/* Input Section */}
      <div className="flex gap-2 mb-4">

        <input
          type="text"
          placeholder="Expense Name"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
          onChange={(e) => setExpense((prev) => ({ ...prev, addDescription: e.target.value }))}
        />

        <input
          type="number"
          placeholder="Amount"
          className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
          onChange={(e) => setExpense((prev) => ({ ...prev, addAmount: e.target.value }))}
        />

        <select className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300" onChange={(e) => setExpense((prev) => ({ ...prev, addCategory: e.target.value }))}>
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Other">Other</option>
        </select>

        <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600" 
        // onClick={() => setExpenseList((prev) => ({ ...prev, expenseList }))}
        >
          Add Expense
        </button>

      </div>
    </>
  )
}

export default ExpenseItem

