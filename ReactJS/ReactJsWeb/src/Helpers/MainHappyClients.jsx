import React from 'react'
import { GoStarFill } from "react-icons/go";
import client1 from '../assets/asset 47.jpeg'

const HappyClients = () => {
    return (
            <div className='grid grid-cols-3 container-section'>
                <div className='bg-white w-[435px] h-100 pt-11 pr-9 pb-6 pl-9 rounded-lg border border-solid' style={{ borderColor: "var(--border-line)" }}>
                    <div className='flex gap-2 mb-4'>
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                    </div>
                    <div className='mb-2 text-xl font-semibold mb-2'>Best Online Fashion Site</div>
                    <div className='text-[18px] mb-6'>“ I always find something stylish and affordable on this web fashion site ”</div>
                    <div className='mb-8'>
                        <div className='font-semibold'>Robert Smith</div>
                        <div className='text-gray-500'>Customer From USA</div>
                    </div>
                    <hr />
                    <div className='pt-6 relative flex items-center'>
                        <div><img src={client1} alt="" className='h-16 max-w-16' /></div>
                        <div className='pl-6 pr-5'>
                            <p className='mb-1.5'>3-in-1 Wireless Charger with Official MagSafe Charging 15W</p>
                            <div className='font-semibold'>$105.95</div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HappyClients