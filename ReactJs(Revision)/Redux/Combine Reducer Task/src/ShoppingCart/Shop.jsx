import React, { useEffect, useState } from 'react'
import { FcLikePlaceholder  , FcLike } from "react-icons/fc";
import { add_to_cart } from '../../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';


const Shop = () => {

    const dispatch = useDispatch()

    const cartdata = useSelector(state => state.cartreducer)
    const iscart = (item) => cartdata.some(cartItem => cartItem.name === item.name)

    const data = [
        {
            name: "Priti",
            age: 24,
            city: "Surat"
        }
    ]


    return (
        <div className='grid grid-cols-5 gap-5 mx-auto'>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <p>{item.age}</p>
                            <p>{item.city}</p>
                            <button onClick={() => { dispatch(add_to_cart(item)) }}>
                                {iscart(item) ? <FcLike /> : <FcLikePlaceholder /> }
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Shop