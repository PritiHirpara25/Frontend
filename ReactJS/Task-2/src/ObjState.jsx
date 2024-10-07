import React from 'react'
import { useState } from 'react';

const ObjState = () => {

    const [user, setUser] = useState({
        name: "",
        age: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Update the state using the spread operator
        setUser({
            ...user,
            [name]: value, // Dynamically update the property using computed property names
        });
    };


    return (
        <div className='border-2 flex flex-col items-center mx-96 mt-48 py-5 bg-green-200'>
            <h1>Object State Example</h1>

            <p>Name: {user.name}</p>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className='border-2 border-solid border-black'
            />

            <p>Age: {user.age}</p>
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Enter your age"
                className='border-2 border-solid border-black'
            />

            <p>Email: {user.email}</p>
            <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className='border-2 border-solid border-black'
            />

            <h2>User Information:</h2>
            <textarea name="" id="" className='border-2 border-black'></textarea>

        </div>
    );
}

export default ObjState
