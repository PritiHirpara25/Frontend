import axios from "axios";
import React, { useEffect, useState } from "react";

const RecordCrud = () => {
  
  const[userData , setUserData] = useState([])
  console.log(userData)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const fetchData = async()=>{
    const usersData = await axios.get('http://localhost:3000/user');
    setUserData(usersData.data);
  };

  useEffect(() => {
     fetchData();
  },[])

  const handlleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/user' , formData)
  }

  const deleteData = (id) => {
    axios.delete(`http://localhost:3000/user/${id}`)
  }

  return (

    <div className="container mx-auto bg-white rounded-lg shadow-md p-6">
      <h1 className="text-3xl font-bold mb-4 text-center">
        CRUD
      </h1>

      <div className="mb-4">
        <div className="text-center flex justify-center">
        </div>
        <form className="grid grid-cols-2 gap-4" onSubmit={handlleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="tel"
            name="contact"
            value={formData.contact}
            placeholder="Contact"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Address"
            required
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-500  w-40 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add User
          </button>
        </form>
      </div>
      <div className="flex  justify-between">
        <div className="mb-4 flex items-center">
          <p className="mr-2">Show</p>
          <select
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p className="ml-2">Entries</p>
        </div>

        <div className="mb-4 flex items-center">
          <label htmlFor="search" className="mr-2">
            Search:
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search..."
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <table className="user-table w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Contact</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {userData.length === 0 ? <tr><td>No data Found</td></tr> : userData.map((user, index) => (
            <tr key={user.id}>
              <td className="p-2 border text-center">{index + 1}</td>
              <td className="p-2 border">{user.name}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.contact}</td>
              <td className="p-2 border">{user.address}</td>
              <td className="p-2 border">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded mr-1">
                  Edit
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => deleteData(user.id) }>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between">
        <div className="mt-4">
          <p className="text-lg font-medium">Showing 1 to 10 Entries</p>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">
            Previous
          </button>
          <span className="py-2 px-4 border border-gray-300 rounded">1</span>
          <span className="py-2 px-4 border border-gray-300 rounded">2</span>
          <span className="py-2 px-4 border border-gray-300 rounded">3</span>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded ml-2">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}


export default RecordCrud;
