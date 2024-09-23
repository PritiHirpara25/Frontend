import React from 'react'
import Com_A from './Com_A.jsx'
import { createContext } from 'react'

export const data = createContext()
export const data1 = createContext()

const Main2 = () => {
  return (
    <div>
      {/* UseContext */}
      {/* <data.Provider value={'Priti'}>
        <Com_A />
      </data.Provider> */}

      <data.Provider value={'Priti'}>
        <data1.Provider value={20}>
        <Com_A />
        </data1.Provider>
      </data.Provider>

    </div>
  )
}

export default Main2