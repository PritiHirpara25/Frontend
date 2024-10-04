import React from 'react'
import { useState } from 'react';

const MultipleState = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState("");
    return (
        <div className='m-3 p-5'>
            <h1 className='text-2xl border-2'>Multiple State Variables</h1>

            <p>Name: {name}</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />

            <p>Age: {age}</p>
            <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your age"
            />

            <p>Email: {email}</p>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
            />

        </div>
    );
}

export default MultipleState
