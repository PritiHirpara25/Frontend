import React, { useContext } from 'react'
import {data} from './Main2'
import {data1} from './Main2'

const Com_D = () => {
  const name = useContext(data)
  const age = useContext(data1)
  return (
    <div>
      <h1 className='heading'>This is Component D with {name}{age}  </h1>
    </div>
  )
}

export default Com_D

















// import React from 'react'
// import { data } from './Main'
// import { data1 } from './Main'

// const Com_D = () => {
//   return (
//     <div>
//       {
//         <data.Consumer>
//           {
//             (value) => {
//               return (
//                 <>
//                   <h1 className='heading'>This is Component D with {value} </h1>
//                 </>
//               )
//             }
//           }
//         </data.Consumer>
//       }
//     </div>
//   )
// }

// export default Com_D