import React from 'react'
import item1 from "./assets/watch1.jpg"
import item2 from "./assets/watch2.jpg"
import item3 from "./assets/watch3.jpg"
import item4 from "./assets/watch4.jpg"
import item5 from "./assets/watch5.jpg"
import item6 from "./assets/watch6.jpg"
import item7 from "./assets/watch7.jpg"
import item8 from "./assets/watch8.jpg"
import { useState,useEffect } from 'react'

const Product = [
  {
    id: 1,
    name: "Rado",
    price: 250000,
    discount: "20%",
    category: "Watch",
    img: item1,
  },
  {
    id: 2,
    name: "Firebolt",
    price: 2500,
    discount: "15%",
    category: "Watch",
    img: item2,
  },
  {
    id: 3,
    name: "BvlGari",
    price: 170099,
    discount: "17%",
    category: "Watch",
    img: item3,
  },
  {
    id: 4,
    name: "OffShore",
    price: 285090,
    discount: "20%",
    category: "Watch",
    img: item4,
  },
  {
    id: 5,
    name: "hublot",
    price: 25000,
    discount: "28%",
    category: "Watch",
    img: item5,
  },
  {
    id: 6,
    name: "FastTreak",
    price: 37000,
    category: "Watch",
    img: item6,
  },
  {
    id: 7,
    name: "rolex",
    price: 45990,
    discount: "5%",
    category: "Watch",
    img: item7,
  },
  {
    id: 8,
    name: "samsung",
    price: 6700,
    discount: "10%",
    category: "Watch",
    img: item8,
  },

];

const ListRenderingArray = () => {
    const [productData, setProductData] = useState([]);
    useEffect(() => {
      setProductData(Product);
    }, []);
     
  return (
    <div>
      <h1 className="text-center bg-purple-600 p-2">
        This is List-Rendering in React
      </h1>

      {/* <button onClick={data}>Click For Data</button> */}
      <div className="flex flex-wrap gap-2">
        {productData.map((product) => {
          return (
            <div className="w-[300px] rounded-md border" key={product.id}>
              <img
                src={product.img}
                alt="not found"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="inline-flex items-center text-lg font-semibold">
                  {product.name} &nbsp;
                </h1>
                <p className="mt-3 text-sm text-gray-600">Rs.{product.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListRenderingArray