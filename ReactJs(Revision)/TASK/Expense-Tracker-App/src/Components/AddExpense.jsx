import React, { useState } from 'react'

const AddExpense = () => {

  const [ expense  , setExpense] = useState([])
  console.log(expense);

  const[addExpense , setAddExpense] = useState({
    addDescription: '',
    addAmount: '',
    addCategory: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAddExpense((prev) => [...prev , addExpense]) 
    // setAddExpense({addDescription:'' , addAmount:'' , addCategory:''})
  }

  const handleChange = (e) => {                     
    console.log(e.target);
    const { name, value } = e.target;
    setAddExpense((prev) => ({ ...prev, [name]: value })); 
  };

  return (
    <div>
      <form className='p-2 border-2 border-black w-fit' onClick={handleSubmitForm}>
        <div className='m-2 p-1.5'>
          <label htmlFor="">Description : </label>
          {/* <input type="text" name="addDescription" id="" className='border-2 border-black' value={addExpense.addDescription} onChange={(e)=>setAddExpense(prev=>{...prev,addDescription:e.target.value})} /> */}
          <input type="text" name="addDescription" id="" className='border-2 border-black' value={addExpense.addDescription} onChange={handleChange} />
        </div>
        <div className='m-2 p-1.5'>
          <label htmlFor="">Amount : </label>
          <input type="text" name="addAmount" id="" className='border-2 border-black' value={addExpense.addAmount} onChange={handleChange} />
        </div>
        <div className='m-2 p-1.5'>
          <label htmlFor="">Category : </label>
          <input type="text" name="addCategory" id="" className='border-2 border-black' value={addExpense.addCategory} onChange={handleChange} />
        </div>
        <div className='flex justify-center' >
          <button type='submit' className='bg-orange-300 p-1.5 rounded-md'>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default AddExpense

// import React from 'react';

// const AddExpense = () => {
//   return (
//     <div className="bg-gray-100 flex justify-center items-center h-screen">
//       <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
//         <h1 className="text-2xl font-bold text-center mb-4">Expense Tracker</h1>

//         {/* Input Section */}
//         <div className="flex gap-2 mb-4">
//           <input
//             type="text"
//             placeholder="Expense Name"
//             className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
//           />
//           <input
//             type="number"
//             placeholder="Amount"
//             className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
//           />
//           <select className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300">
//             <option value="Food">Food</option>
//             <option value="Transport">Transport</option>
//             <option value="Other">Other</option>
//           </select>
//           <input
//             type="date"
//             className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring focus:ring-green-300"
//           />
//           <button className="bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600">
//             Add Expense
//           </button>
//         </div>

//         {/* Expense List Section */}
//         <table className="w-full text-left border-collapse mb-4">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border border-gray-300 p-2">Expense Name</th>
//               <th className="border border-gray-300 p-2">Amount</th>
//               <th className="border border-gray-300 p-2">Category</th>
//               <th className="border border-gray-300 p-2">Date</th>
//               <th className="border border-gray-300 p-2">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td className="border border-gray-300 p-2">Travel</td>
//               <td className="border border-gray-300 p-2">$50.00</td>
//               <td className="border border-gray-300 p-2">Transport</td>
//               <td className="border border-gray-300 p-2">2024-07-21</td>
//               <td className="border border-gray-300 p-2">
//                 <button className="bg-blue-500 text-white rounded-lg px-2 py-1 hover:bg-blue-600">
//                   Edit
//                 </button>
//                 <button className="bg-red-500 text-white rounded-lg px-2 py-1 hover:bg-red-600">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>

//         {/* Total and Filter Section */}
//         <div className="flex justify-between items-center">
//           <p className="font-bold">
//             Total: <span className="text-green-500">$50.00</span>
//           </p>
//           <div className="flex items-center gap-2">
//             <label htmlFor="filter" className="font-bold">
//               Filter by Category:
//             </label>
//             <select
//               id="filter"
//               className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-green-300"
//             >
//               <option value="All">All</option>
//               <option value="Food">Food</option>
//               <option value="Transport">Transport</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddExpense;
