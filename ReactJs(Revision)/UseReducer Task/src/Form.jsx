import React, { useState } from 'react'
import { MdAddTask } from "react-icons/md";
        
const Form = ({handleFormSubmit , inputValue , setInputValue}) => {

    // On Input change
    function handleInputChange(value) {
        setInputValue(value)
    }

    function handleInputSubmit(e){
        e.preventDefault();
        handleFormSubmit()
        setInputValue('')
    }

    return (
        <div>
            <form className='center' onSubmit={handleInputSubmit}>
                <div className='bg-amber-300 rounded-xl w-fit p-2 m-2 w-64'>
                    <input type="text" className='border border-solid border-black rounded-md bg-amber-200 w-52' value={inputValue} onChange={(e) => handleInputChange(e.target.value)} />
                    <button type='submit' className='m-2'><MdAddTask /></button>
                </div>
            </form>
        </div>
    )
}

export default Form
