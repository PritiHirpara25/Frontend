import React from 'react'

export function Product({ name, inStock }) {
  // if (inStock === 'true') {
  //   return <li>{name}</li>
  // }
  // else {
  //   return <li><ins>{name}</ins></li>
  // }

  return
  <>
    {
      inStock ? <div>{name}</div> : <div><del>{name}</del></div>
    }
  </>
}

const Props = ({ name, inStock }) => {
  return (
    <div>
      <ul>
        <Product name="Toy" inStock="false" />
        <Product name="Car" inStock="true" />
        <Product name="Mobile" inStock="true" />
        <Product name="T-shirt" inStock="false" />
        <Product name="Bunglow" inStock="false" />
        <Product name="Laptop" inStock="true" />
      </ul>
    </div>
  )
}

export default Props