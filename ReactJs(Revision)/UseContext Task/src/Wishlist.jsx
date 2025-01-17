import React, { useContext } from 'react'
import { ProductContext, WishlistContext } from './ShopProvider'

const Wishlist = () => {

  const { wishlist } = useContext(WishlistContext);
  const { products } = useContext(ProductContext);

  const wishlistItems = products.filter((product) => wishlist.includes(product.id));

  return (
    <div className='grid grid-cols-4 m-10 gap-4'>
      {wishlistItems.map((item) => (
        <div key={item.id} className='h-auto w-60 shadow-xl m-auto'>
          <img src={item.images[0]} alt={item.title} className='h-40 w-40 m-auto' />
          <h3 className='m-2'>{item.title}</h3>
          <p className='m-2'>${item.price}</p>
        </div>
      ))}
    </div>
  )
}

export default Wishlist
