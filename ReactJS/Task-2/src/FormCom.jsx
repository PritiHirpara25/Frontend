import React from "react";
import { useState } from "react";

const FormCom = () => {
  // Define the state to hold form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  // Handle input change for each form field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now use the formData object to send data to an API or process it
    console.log("Form submitted with:", formData);
    // Reset form after submission (optional)
    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <div>
      <h1 className="text-4xl p-4 m-4 ">Simple Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">Name:</label>
          <input
            className="border-2"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">Email:</label>
          <input
            className="border-2"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">Password:</label>
          <input
            className="border-2"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-700 px-6 py-2 rounded-2xl mt-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormCom;
