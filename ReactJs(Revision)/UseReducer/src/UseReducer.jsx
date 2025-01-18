// import React, { useReducer } from 'react'

// const UseReducer = () => {

//     const initialState = {age:20 , data : 40}
//     // console.log('age' ,age)
    
//     const Reducer = (state , action) => {
//         switch(action.type){
//             case "IncrementAge" : return{
//                 ...state , age:state.age + 1
//             }
//             case "DecrementAge" : return{
//                 ...state , age:state.age - 1
//             }
//             case  "IncrementData" : return{
//               ...state , data:state.data + 1
//             }
//             case  "DecrementData" : return{
//               ...state , data:state.data - 1
//             }
//             default: return state
//         }
//     }

    
//     const[state , dispatch] = useReducer(Reducer , initialState)
//     // const[state , dispatch] = useReducer(Reducer , {age:20 , data : 40})

//   return (
//     <div>
//       <p>{state.age}</p>
//       <button onClick={() => dispatch({type:'IncrementAge'})}>IncrementAge</button>
//       <button onClick={() => dispatch({type:'DecrementAge'})}>DecrementAge</button>
//       <p>{state.data}</p>
//       <button onClick={() => dispatch({type:'IncrementData'})}>IncrementData</button>
//       <button onClick={() => dispatch({type:'DecrementData'})}>DecrementData</button>
//     </div>
//   )
// }

// export default UseReducer




















import React, { useReducer } from 'react'

const UseReducer = () => {

    const initialState = [{age:20 , data : 40}]
    // console.log('age' ,age)
    
    const Reducer = (state , action) => {
        switch(action.type){
            case "IncrementAge" : return[{
                ...state[0] , age:state[0].age + 1
            }]
            case "DecrementAge" : return[{
                ...state[0] , age:state[0].age - 1
            }]
            case  "IncrementData" : return[{
              ...state[0] , data:state[0].data + 1
            }]
            case  "DecrementData" : return[{
              ...state[0] , data:state[0].data - 1
            }]
            default: return state
        }
    }

    
    const[state , dispatch] = useReducer(Reducer , initialState)
    // const[state , dispatch] = useReducer(Reducer , {age:20 , data : 40})

  return (
    <div>
      <p>{state[0].age}</p>
      <button onClick={() => dispatch({type:'IncrementAge'})}>IncrementAge</button>
      <button onClick={() => dispatch({type:'DecrementAge'})}>DecrementAge</button>
      <p>{state[0].data}</p>
      <button onClick={() => dispatch({type:'IncrementData'})}>IncrementData</button>
      <button onClick={() => dispatch({type:'DecrementData'})}>DecrementData</button>
    </div>
  )
}

export default UseReducer

