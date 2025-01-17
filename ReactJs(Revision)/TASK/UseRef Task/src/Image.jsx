import React, { useRef } from 'react'
import img1 from './assets/image1.png'
import img2 from './assets/image2.png'
import img3 from './assets/image3.png'

const Image = () => {

    const imgref = useRef(null)

    const scroll = (index) => {
        const imgnode = imgref.current
        const list = imgnode.querySelectorAll('li > img')[index]
        list.scrollview({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }

    return (
        <div>
            <div>
            <ul ref={imgref} className='flex'>
                <li>
                    <img src={img1} alt="" className='w-56 h-40 m-2' />
                </li>
                <li>
                    <img src={img2} alt="" className='w-56 h-40 m-2' />
                </li>
                <li>
                    <img src={img3} alt="" className='w-56 h-40 m-2' />
                </li>
            </ul>
            </div>
            <div className='flex justify-center'>
                <button onClick={() => scroll(0)} className='bg-gray-400 p-1.5 m-2'>1</button>
                <button onClick={() => scroll(1)} className='bg-gray-400 p-1.5 m-2'>2</button>
                <button onClick={() => scroll(2)} className='bg-gray-400 p-1.5 m-2'>3</button>
            </div>

        </div>
    )
}

export default Image
