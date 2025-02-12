import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa6";

const Shop = () => {
    
    const [shop , setShop] = useState([])

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
                        <p><FaRegHeart/></p>
                    </div>
                ))
        }
        </div>
    )
}

export default Shop