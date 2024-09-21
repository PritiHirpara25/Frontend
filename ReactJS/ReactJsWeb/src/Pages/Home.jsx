import React from "react";
import SimpleSlider from '../Components/SimpleSlider'
import Scroll from "../Components/Scroll";
import ShopbyCategory from '../Components/ShopbyCategory'
import BestDeals from "../Components/BestDeals";
import Twocom from "../Components/Twocom";
import Discount from "../Components/Discount";
import Trending from "../Components/Trending";
import HappyClient from "../Components/HappyClient";
import Blogs from "../Components/Blogs";
import Shipping from "../Components/Shipping";
import Footerblack from "../Components/Footerblack";

const Home = () => {
  return (
    // <div>
    <div className="max-w[1540px]">
      <SimpleSlider />
      <Scroll />
      <ShopbyCategory />
      <BestDeals />
      <Twocom />
      <Discount />
      <Trending />
      <HappyClient/>
      <Blogs/>
      <Shipping/>
      <Footerblack/>
    </div>
  )
}

export default Home




// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';