import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ShopDetails = () => {

    const {id} = useParams()

    const shop = useLoaderData()

    return (
        <div className='grid grid-cols-5 mx-auto w-fit mt-8 '>
            <h1>This is home Page {id}</h1>
            <div className='h-60 w-60 m-5 shadow-lg'>
                <img src={shop.image} alt="" className='h-36 w-36 mx-auto' />
                <span className='line-clamp-2 m-2'>{shop.title}</span>
                {/* <span className='text-green-800 m-2'>{homedata.price}₹</span> */}
            </div>
        </div>
    )
}

export const ShopDetailsData = async ({ params }) => {
    const { id } = params
    const res = await fetch("https://fakestoreapi.com/products" + id)

    if (!res.ok) {
        throw Error('Data Not Available.....!')
    }

    return res.json()
}

export default ShopDetails