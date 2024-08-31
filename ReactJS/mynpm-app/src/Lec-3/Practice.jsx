import React, { useState } from 'react'

function Sandwich() {
    let number = document.getElementById('guest').value;
    return (
        <div>
            <h1>Sandwich for {number} Person</h1>
            <ul>
                <li>Take {number*2} Bread slices.</li>
                <li>Take {number} Potato.</li>
                <li>Mash the Potato with Spices.</li>
                <li>Spread stuffing on Bread.</li>
                <li>Grill it.</li>
                <li>It's ready to eat. 😃</li>
            </ul>
        </div>
    );
}

function Manchurian() {
    let number = document.getElementById('guest').value;
    return (
        <div>
            <h2>Manchurian for {number} Person</h2>
            <ul>
                <li>Pour {number*2} tablespoons oil.</li>
                <li>Add Ginger-Garlic Paste with Some Veggies.</li>
                <li>Roast it, then add Sauces.</li>
                <li>Add Manchurian Balls.</li>
                <li>It's ready to eat. 😃</li>
            </ul>
        </div>
    );
}

const Practice = () => {
    const [recipe, setRecipe] = useState(null);

    const sandwichRecipe = () => {
        setRecipe('Sandwich');
    };

    const manchurianRecipe = () => {
        setRecipe('Manchurian');
    };

    return (
        <div>
            <input type="number" placeholder="Enter number of Guests" name='guest' id="guest" />
            <button onClick={sandwichRecipe} className='recipe1'>Click for Sandwich</button>
            <button onClick={manchurianRecipe} className='recipe2'>Click for Manchurian</button>
            <div>
                {recipe === 'Sandwich' ? <Sandwich /> : recipe === 'Manchurian' ? <Manchurian /> : null}
            </div>
        </div>
    );
};

export default Practice;