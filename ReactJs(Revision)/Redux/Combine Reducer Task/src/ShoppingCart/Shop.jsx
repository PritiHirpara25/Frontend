import React, { useEffect, useState } from 'react'
import { FcLikePlaceholder } from "react-icons/fc";
import { add_to_cart } from '../../Redux/Action';
import { useDispatch, useSelector } from 'react-redux';


const Shop = () => {
    
    // const [shop , setShop] = useState([])

    // const {item} = useDispatch((state) => state.cartreducer)

    // useEffect(()=> {
    //     // fetch("https://fakestoreapi.com/products").then(res => res.json()).then(data => setShop(data));
    //     dispatch(fetchShopData)
    // },[])

    const dispatch = useDispatch()

    const data = useSelector(state => state.cartreducer);


    return (
        <div className='grid grid-cols-5 gap-5 mx-auto'>
            {data}
        </div>
    )
}

export default Shop