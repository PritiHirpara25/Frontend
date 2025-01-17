import React, { useContext, useState } from 'react';
import { ProductContext, WishlistContext } from './ShopProvider';
import { FaRegHeart , FaHeart } from "react-icons/fa";

const ProductList = () => {
  const { products, loading } = useContext(ProductContext);
  const {wishlist , toggleWishlist} = useContext(WishlistContext);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
      <div className='grid grid-cols-4 m-10 gap-4 '>
        {products.map((item) => (
          <div key={item.id} className='h-auto w-60 shadow-xl m-auto'>
            <img src={item.images[0]} alt={item.title} className='h-40 w-40 m-auto' />
            <h3 className='m-2'>{item.title}</h3>
            <p  className='m-2'>${item.price}</p>
            <button className='m-2 text-xl' onClick={() => toggleWishlist(item.id)}>
            {wishlist.includes(item.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart/>}
            </button>
          </div>
        ))}
      </div>
  );
};

export default ProductList;

