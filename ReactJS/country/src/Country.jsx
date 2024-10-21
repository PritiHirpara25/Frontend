import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Country = () => {


    const [data, setData] = useState([])
    const [value, setValue] = useState()


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])

    // console.log(value);

    return (
        <div>
            <div className='flex justify-center mt-12'>
                <input type="search" placeholder='Search For Recipes' className='w-1/6 p-2' onChange={(e) => { setValue(e.target.value) }} />
                <button className='border-2 border-solid border-black p-2 ml-2 bg-gray-400'>Search</button>
            </div>

            <div className='mt-16'>
                {data.map((country, index) => {
                    const languages = country.languages ? Object.values(country.languages) : [];
                    return <div key={index}>
                        {country.name.common === value ? <div className='text-left'>
                            <p className='font-bold'>Country Name : {country.name.common}</p>
                            <p className='font-bold'>Capital : {country.capital}</p>
                            <p className='font-bold'>Region : {country.region}</p>
                            <p className='font-bold'>Flag : {country.flag}</p>
                            <p className='font-bold'>Population : {country.population}</p>
                            <p className='font-bold'>Area : {country.area}</p>
                            <p>{languages.length>0 ? languages.join(', ') : 'N/A'}</p>
                            <img src={country.flags.png} alt="" />
                        </div>
                            : console.log('Search Not Found')}
                    </div>
                })}
            </div>

            <div className='grid grid-cols-3 mt-10'>
                {data.map((country, index) => {
                    return <div key={index} className='border-2 border-solid border-black'>
                        <img src={country.flags.png} alt="" className='w-1/2 h-1/2' />
                        <p className='bg-teal-700 p-1.5 text-white flex justify-center'>{country.name.common}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Country