import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";


const List = ({item, handleDeleteTask }) => {

    return (
        <div className='flex'>
            <div className='w-48'>
                <span>{item}</span>
            </div>
            <button className='text-xl text-green-600'>< FaCheckCircle /></button>
            {/* Delete Task */}
            <button className='text-xl text-red-600 pl-2' onClick={() => handleDeleteTask(item)}><MdDelete /></button>
        </div>
    )
}

export default List
