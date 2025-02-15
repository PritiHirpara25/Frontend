import React from 'react'
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { addLike } from '../Redux2/CartSlice';

const Shop = () => {

    const data1 = useSelector(state => state.Cart.initialData);
    console.log("UseSelector", data1);

    const dispatch = useDispatch();

    return (
        <div>

            <div className='grid grid-cols-5 gap-5 mx-auto'>
                {
                    data1.map((item, index) => {
                        return (
                            <div key={index}>
                                <h1>{item.name}</h1>
                                <p>{item.age}</p>
                                <p>{item.city}</p>
                                <button onClick={() => dispatch(addLike(item))}>Click</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Shop