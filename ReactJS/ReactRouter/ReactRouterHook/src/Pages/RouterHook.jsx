// import React from 'react'
// import {Link , useNavigate} from 'react-router-dom'

// const RouterHook = () => {
//     const navigate = useNavigate()
//   return (
//     <div>
//         <button onClick={() => navigate('/Login')}>Click For Home</button>
//     </div>
//   )
// }

// export default RouterHook




import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


/* RouterHook useNavigate() Hook */
/* outlet */

const RouterHook = () => {

    const navigate = useNavigate()


  return (
    <div>
      <button onClick={() => navigate('/login')}>Click For Home</button>
    </div>
  )
}

export default RouterHook