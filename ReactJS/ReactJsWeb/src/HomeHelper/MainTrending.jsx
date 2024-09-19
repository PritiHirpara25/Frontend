import React from 'react'

const MainTrending = (image , title , price ) => {
    return (
        <div>
            <div className=' w-[330px] h-auto border-2 border-solid rounded-2xl' style={{ borderColor: "var(--border-line)" }}>
                <div className='' >
                    <img src={image} alt="" className='h-[311px] w-[311px] object-cover object-center' />
                </div>
                <div className='pr-4 pl-4 pb-8 w-[310px] h-[114px] pt-5'>
                    <h6>{title}</h6>
                    <span className='text-bold'>{price}</span>
                </div>
            </div>
        </div>
    )
}

export default MainTrending