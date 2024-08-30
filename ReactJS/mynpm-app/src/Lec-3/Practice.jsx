import React, { useState } from 'react'

function Sandwich(name) {
    return (
        <div>
            <h2>Sandwich for Person</h2>
            <ul>
                <li>Take two Bread slices.</li>
                <li>Take 1{name} Potato.</li>
                <li>Mash the Potato with Spices.</li>
                <li>Spread stuffing on Bread.</li>
                <li>Grill it.</li>
                <li>It's ready to eat. 😃</li>
            </ul>
        </div>
    );
}

function Manchurian() {
    return (
        <div>
            <h2>Manchurian for Person</h2>
            <ul>
                <li>Pour 2 tablespoons oil.</li>
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

    const sandwichRecipe = (name) => {
        setRecipe('Sandwich');
    };

    const manchurianRecipe = () => {
        setRecipe('Manchurian');
    };

    return (
        <div>
            <Sandwich name="guest"/>
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