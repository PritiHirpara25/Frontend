import React, { createContext, useEffect, useState } from 'react'
export const Shoppage = createContext();

const Shop = ({children}) => {

    const [data , setData] = useState('')

    useEffect(() => {
        fetch('https://dummyjson.com/products').then(res => res.json()).then(res => setData(res))
    } ,[])

  return (
    <div>
        <Shoppage.Provider value={item.title}>
            {children}
           { data.map((item , index) => {
                return(
                    <div key={index}>
                        {item.title}
                    </div>
                )

            })}
        </Shoppage.Provider>
    </div>
  )
}

export default Shop