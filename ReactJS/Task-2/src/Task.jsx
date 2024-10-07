import React from 'react'

{/* 1. Methods of Conditional Rendering */ }
{/* a. If else Statements */ }

// export function Car({ name, price }) {
//   if (price >= 1500000) {
//     return <li>{name}</li>
//   }
// }

// const Task = () => {
//   return (
//     <div>
//       <h1 >Conditional Rendering with IF-ELSE Statement</h1>
//         <ul className='bg-purple-500 w-fit p-5 underline border-2 border-solid border-black'>
//           <Car name='Swift' price={500000}/>
//           <Car name='Skoda' price={7000000}/>
//           <Car name='Odi' price={4000000}/>
//           <Car name='Nano' price={200000}/>
//           <Car name='Creta' price={100000}/>
//           <Car name='Fortuner' price={2300000}/>
//         </ul>
//     </div>
//   )
// }

// export default Task


{/* b. Ternary Operator */ }

// export function Fruit({name , quality}){
//   return(
//   <li>
//     { quality === 'bad' ? <li>{name}</li> : <li></li>}
//   </li>
//   )
// }

// const Task = ({name,quality}) => {
//   return (
//     <div>
//       <h1 >Conditional Rendering with Ternory Operator</h1>
//         <ul className='bg-purple-500 w-fit p-5 underline border-2 border-solid border-black'>
//           <Fruit name='Apple' quality={'good'}/>
//           <Fruit name='Banana' quality={'bad'}/>
//           <Fruit name='Graps' quality={'bad'}/>
//           <Fruit name='Kiwi' quality={'good'}/>
//           <Fruit name='Gvava' quality={'bad'}/>
//           <Fruit name='Strawberry' quality={'good'}/>
//         </ul>
//     </div>
//   )
// }

// export default Task

{/* c. Logical && Operator */ }

export function Navaratri({ Dress, wear }) {
  return (
    <>
      {wear === 'yes' && <li>{Dress}</li>}
    </>
  );
}
const Task = () => {
  return (
    <div>
      <h1 >Conditional Rendering with Logical && Operator</h1>
        <ul className='bg-purple-500 w-fit p-5 underline border-2 border-solid border-black'>
          <Navaratri Dress='Choli' wear={'yes'}/>
          <Navaratri Dress='Kurti' wear={'no'}/>
          <Navaratri Dress='Sarara' wear={'no'}/>
          <Navaratri Dress='Saree' wear={'yes'}/>
          <Navaratri Dress='Jeans' wear={'no'}/>
          <Navaratri Dress='Suit' wear={'yes'}/>
        </ul>
    </div>
  )
}

export default Task

{/* d. Switch Case Statements */ }

// export function Hospital({Disease , DrAvailable}){
//       switch(DrAvailable){
//         case 'yes':
//           return <li>{Disease}</li> ;
//           default:
//             return <li></li>
//       }
// }

// const Task = () => {
//   return (
//     <div>
//       <h1 >Conditional Rendering with Switch Case Statements </h1>
//         <ul className='bg-purple-500 w-fit p-5 underline border-2 border-solid border-black'>
//           <Hospital Disease='Pneumonia' DrAvailable={'yes'}/>
//           <Hospital Disease='dengue' DrAvailable={'yes'}/>
//           <Hospital Disease='Typhoid' DrAvailable={'no'}/>
//           <Hospital Disease='Heart Attack' DrAvailable={'no'}/>
//           <Hospital Disease='Cancer' DrAvailable={'yes'}/>
//           <Hospital Disease='COVID-19' DrAvailable={'no'}/>
//         </ul>
//     </div>
//   )
// }

// export default Task

