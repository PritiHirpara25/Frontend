import React from 'react'
import { useState } from 'react';

const FormInput = () => {
  // Define state to manage multiple form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    gender: "", // Radio button selection
    interests: [], // Checkbox selections
  });

  // Handle radio button change
  const handleRadioChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      gender: value, // Update gender selection
    });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(value); // Add the selected interest
    } else {
      updatedInterests = updatedInterests.filter(
        (interest) => interest !== value
      ); // Remove the unselected interest
    }

    setFormData({
      ...formData,
      interests: updatedInterests, // Update the interests array
    });
  };

  // Handle change for all input fields
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
    // Process the form data
    console.log("Form submitted:", formData);
    // Reset the form (optional)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zip: "",
      gender: "",
      interests: [],
    });
  };

  return (
    <div>
      <h1 className="text-4xl p-4 m-4 ">Form With Multiple Data</h1>
      <fieldset className='border-2 border-black'>
        <legend>Form</legend>
      <form onSubmit={handleSubmit} className='pl-2'>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">First Name:</label>
          <input
            className="border-2"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">Last Name:</label>
          <input
            className="border-2"
            type="text"
            name="lastName"
            value={formData.lastName}
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
          <label className="p-2 text-red-700 text-2xl m-4">Phone:</label>
          <input
            className="border-2"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">Address:</label>
          <input
            className="border-2"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">City:</label>
          <input
            className="border-2"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">ZIP Code:</label>
          <input
            className="border-2"
            type="text"
            name="zip"
            value={formData.zip}
            onChange={handleChange}
          />
        </div>
        {/* Radio Buttons */}
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">
            Select Gender:
          </label>
          <div>
            <input
            className='ml-8'
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleRadioChange}
            />
            Male
          </div>
          <div>
            <input
            className='ml-8'
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleRadioChange}
            />
            Female
          </div>
          <div>
            <input
            className='ml-8'
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleRadioChange}
            />
            Other
          </div>
        </div>

        {/* Checkboxes */}
        <div>
          <label className="p-2 text-red-700 text-2xl m-4">
            Select Your Interests:
          </label>
          <div>
            <input
            className='ml-8'
              type="checkbox"
              name="interests"
              value="Music"
              checked={formData.interests.includes("Music")}
              onChange={handleCheckboxChange}
            />
            Music
          </div>
          <div>
            <input
            className='ml-8'
              type="checkbox"
              name="interests"
              value="Sports"
              checked={formData.interests.includes("Sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </div>
          <div>
            <input
            className='ml-8'
              type="checkbox"
              name="interests"
              value="Reading"
              checked={formData.interests.includes("Reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-500 px-6 py-2 rounded-2xl mt-8 mb-2 ml-4"
        >
          Submit
        </button>
      </form>
      </fieldset>

    </div>
  );
}

export default FormInput
