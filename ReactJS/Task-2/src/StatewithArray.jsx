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
    <div>
      <h1>Array State Example</h1>
      <button onClick={addItem}>Add Item</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatewithArray
