import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { add_to_cart } from '../../Redux/Action';

const Shop = () => {
    
    const [shop , setShop] = useState([])

    const dispatch = useDispatch((state) => state.cartreducer)

    useEffect(()=> {
        fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setShop(data));
    },[])


    return (
        <div className='grid grid-cols-5 gap-5 mx-auto'>
            {
                shop.map((item, index) => ( 
                    <div className='border border-black w-52 h-52 flex flex-col items-center'>
                        <img src={item.image} className='h-36 w-36' alt="" />
                        <p key={index} className='flex flex-wrap line-clamp-2'>{item.title}</p>
                        <button onClick={dispatch(add_to_cart())}><FaRegHeart/></button>
                    </div>
                ))
        }
        </div>
    )
}

export default Shop