import React from 'react'
import { useState } from 'react';

const StatewithArray = () => {

      const [items, setItems] = useState([]);

      const addItem = () => {
        // Generate a random number to add to the array
        const newItem = Math.floor(Math.random() * 100) + 1;

        // Update state with a new array (do not mutate the original array)
        setItems([...items, newItem]);
      };

      const removeItem = (indexToRemove) => {
        // Create a new array with the item at indexToRemove filtered out
        setItems(items.filter((item, index) => index !== indexToRemove));
      };


  return (
    <div className='bg-zinc-200 border-2 border-black flex flex-col items-center py-3 mx-96 mt-56'>
      <h1>State With Array</h1>
      <button onClick={addItem} className='border-2 border-transparent bg-zinc-400 px-2 rounded-md mt-2'>Add Items</button>

      <ul>
        {items.map((item, index) => (
          <li key={index} className='border-2 border-black mt-2 rounded-sm'>
             <p className='bg-zinc-300 flex justify-center'>{item}</p>
             <button onClick={() => removeItem(index)} className='px-2'>Click for Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatewithArray
