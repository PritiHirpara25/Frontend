import React from 'react'
import {data} from './Main1'
import {data1} from './Main1'

const Com_D = () => {
  return (
    <div>
      {
        <data.Consumer>
          {
            (value) => {
              return (
                <>
                  {
                    <data1.Consumer>
                      {
                        (value1) => {
                          return (
                            <>
                              <h1 className='heading'>This is Component D with {value} {value1} </h1>
                            </>
                          )
                        }
                      }
                    </data1.Consumer>
                  }
                </>
              )
            }
          }
        </data.Consumer>
      }
    </div>
  )
}

export default Com_D










// import React from 'react'
// import { data } from './Main1'
// import { data1 } from './Main1'

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