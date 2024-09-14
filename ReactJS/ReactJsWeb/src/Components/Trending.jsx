import React from 'react'
import Tprotector from '../assets/asset 39.png'
import lightswitch from '../assets/asset 41.png'
import buds from '../assets/asset 43.png'
import headphone from '../assets/asset 45.png'

const Trending = () => {
    return (
        <div>
            <div className='header'>
                <h1 className='text-5xl pl-[50px] pt-[60px]'>Trending Products</h1>
            </div>
            <div className='container-section flex gap-7'>
                <div className=' w-[330px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var(--border-line)" }}>
                    <div className='' >
                        <img src={Tprotector} alt="" className='h-[311px] w-[311px] object-cover object-center' />
                    </div>
                    <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                        <h6>UltraGlass 2 Treated Screen Protector for iPhone 15 Pro</h6>
                        <span className='text-bold'>$39.99</span>
                    </div>
                </div>
                <div className=' w-[330px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var(--border-line)" }}>
                    <div className='' >
                        <img src={lightswitch} alt="" className='h-[311px] w-[311px] object-cover object-center' />
                    </div>
                    <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                        <h6>Smart Light Switch with Thread</h6>
                        <span className='text-bold'>$49.99</span>
                    </div>
                </div>
                <div className=' w-[330px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var(--border-line)" }}>
                    <div className='' >
                        <img src={buds} alt="" className='h-[311px] w-[311px] object-cover object-center' />
                    </div>
                    <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                        <h6>SoundForm Rise</h6>
                        <div>
                        <span className='line-through text-gray-400'>$100.00</span>
                        <span className='text-bold'>$79.99</span>
                        </div>
                    </div>
                </div>
                <div className=' w-[330px] h-auto border-2 border-solid rounded-2xl max-lg:hidden' style={{ borderColor: "var(--border-line)" }}>
                    <div className='' >
                        <img src={headphone} alt="" className='h-[311px] w-[311px] object-cover object-center' />
                    </div>
                    <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                        <h6>Wireless On-Ear HeadPhones for Kids</h6>
                        <div>
                        <span className='line-through text-gray-400'>$34.99</span>
                        <span className='text-bold'>$24.99</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Trending


// h-[446.65px] 