import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();
export const WishlistContext = createContext();

const ShopProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [wishlist , setWishlist] = useState([])

  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  const handleRemove = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter((item) => item.id !== id));
  }
  // console.log('wishlist' , wishlist)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, loading }}>
      <WishlistContext.Provider value={{wishlist , toggleWishlist ,handleRemove}}>
      {children}
      </WishlistContext.Provider>
    </ProductContext.Provider>
  );
};

export default ShopProvider
