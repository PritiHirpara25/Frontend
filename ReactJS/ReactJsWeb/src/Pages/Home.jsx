import React from "react";
import SimpleSlider from '../Components/SimpleSlider'
import Scroll from "../Components/Scroll";
import ShopbyCategory from '../Components/ShopbyCategory'
import BestDeals from "../Components/BestDeals";
import Twocom from "../Components/Twocom";
import Discount from "../Components/Discount";
import Trending from "../Components/Trending";
import Clients from "../Components/Clients";
import HappyClient from "../Components/HappyClient";

const Home = () => {
  return (
    // <div className="max-w[1540px]">
    <div>
      <SimpleSlider />
      <Scroll />
      <ShopbyCategory />
      <BestDeals />
      <Twocom />
      <Discount />
      <Trending />
      <Clients />
      <HappyClient/>
    </div>
  )
}

export default Home




// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';