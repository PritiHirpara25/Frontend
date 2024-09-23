import React from 'react'
import Com_A from './Com_A.jsx'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

const Main1 = () => {
  return (
    <div>
      {/* single value passing */}
      {/* <data.Provider value={'Priti'}>
        <Com_A />
      </data.Provider> */}


        {/* Multiple value passing */}
      <data.Provider value={'Priti'}>
        <data1.Provider value={'Hirpara'}>
        <Com_A />
        </data1.Provider>
      </data.Provider>
    </div>
  )
}

export default Main1