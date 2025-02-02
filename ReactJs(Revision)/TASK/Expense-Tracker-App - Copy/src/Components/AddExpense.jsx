import { useState } from "react";
import ExpenseItem from "./ExpenseItem"

const AddExpense = () => {

  const[addExpense , setAddExpense] = useState({
    addDescription: '',
    addAmount: '',
    addCategory: '',
  });
  
    return (
    <div>
       <div className="bg-gray-100 flex justify-center items-center ">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full ">
        <h1 className="text-2xl font-bold text-center mb-4">ExpenseApp</h1>
        <ExpenseItem/>
      </div>
    </div>
    </div>
  )
}

export default AddExpense


