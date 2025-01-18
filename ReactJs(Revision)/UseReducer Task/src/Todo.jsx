import React, { useEffect, useReducer, useState } from 'react';
import Form from './Form';
import List from './List';
import DateTime from './DateTime';
import { getLocalStorageTodoData, setLocalStorageTodoData } from './TodoLocalStorage';

const initialState = getLocalStorageTodoData();

// Reducer function
function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            if (!action.value || state.includes(action.value)) {
                return state; 
            }
            return [...state, action.value];
        case 'DELETE_TASK':
            return state.filter((item) => item !== action.value);
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
}

const Todo = () => {
    const [task, dispatch] = useReducer(todoReducer, initialState);

    // Input Value
    const [inputValue, setInputValue] = useState('');

    // Save task data to local storage 
    useEffect(() => {
        setLocalStorageTodoData(task);
    }, [task]);

    // Form submit
    function handleFormSubmit() {
        dispatch({ type: 'ADD_TASK', value: inputValue });
        setInputValue('');
    }

    // Delete task
    function handleDeleteTask(value) {
        dispatch({ type: 'DELETE_TASK', value });
    }

    // Clear all task
    function handleClearAllTask() {
        dispatch({ type: 'CLEAR_ALL' });
    }

    return (
        <div className=''>
            <div className=''>
                <h1 className='center font-bold text-2xl'>To Do List App</h1>
                <DateTime />
                {/* Form */}
                <Form handleFormSubmit={handleFormSubmit} inputValue={inputValue} setInputValue={setInputValue} />
                {/* Add Task */}
                <div className='flex flex-col items-center'>
                    {task.map((item, index) => (
                        <div key={index} className='bg-amber-400 m-2 p-2 rounded-lg w-64 flex'>
                            <List item={item} handleDeleteTask={handleDeleteTask} />
                        </div>
                    ))}
                </div>
                <div className='center'>
                    <button className='bg-amber-400 p-1.5 rounded-md' onClick={handleClearAllTask}>
                        Clear All
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Todo;