// import React, { useState } from 'react'
// import { useReducer } from 'react';

// const initialState = 0;

// const reducer = (state , action) => {
//     // console.log(state,action)
//     if(action.type === 'INCREMENT'){
//       return state + 1;
//     }
//     else{
//       return state - 1;
//     }
//     return state;
// }

// const demo = () => {
//     // const[count , setCount] = useState(0);

//     const [state , dispatch] = useReducer(reducer , initialState)

//     // const increment = () => {
//     //     setCount(count + 1) ;
//     // }

//     // const decrement = () => {
//     //     setCount(count - 1) ;
//     // }

//   return (
//     <div>
//         <p>{state}</p>
//         <div onClick={() => dispatch({type:'INCREMENT'})} >INCREMENT</div>
//         <div onClick={() => dispatch({type:'DECREMENT'})} >DECREMENT</div>
//     </div>
//   )
// }

// export default demo



import React, { useState } from 'react'
import { useReducer } from 'react';

// const Reducer = (state , action) => {
//     console.log(state.age , action)
//     if(action === 'INCREMENTAGE'){
//       return state.age + 1;
//     }
//     else{
//       return state.age - 1;
//     }
//     // return state.age;
// }

const Reducer = (state, action) => {
  console.log(state.age, action)
  switch (action) {
    case 'INCREMENT': return {
        ...state,
        age: state.age + 1
      };
    case 'DECREMENT': return {
        ...state,
        age: state.age - 1
      };
    default:
      return state;
  }
}

const demo = () => {

  const [state, dispatch] = useReducer(Reducer, { age: 20 })

  return (
    <div>
      <p> AGE: {state.age}</p>
      <div onClick={() => dispatch('INCREMENTAGE')} className='button'>INCREMENT AGE</div>
      <div onClick={() => dispatch('DECREMENTAGE')} className='button'>DECREMENT AGE</div>
    </div>
  )
}

export default demo