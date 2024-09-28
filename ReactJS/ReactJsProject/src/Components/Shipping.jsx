import React from 'react'
import { FiBox } from "react-icons/fi";

const Shipping = () => {
  return (
    <section className="flex py-[70px] mt-16 justify-center items-center bg-[#f5f5f5] px-12">
      <div className=" flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Free Shipping</p>
          <p className="text-[14px]">Free shipping over order $120</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Flexible Payment</p>
          <p className="text-[14px]">Pay with Multiple Credit Cards</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">14 Days Returns</p>
          <p className="text-[14px]">Within 30 days for an Exchange</p>
        </div>
      </div>

      <div className="bg-[#f5f5f5] flex gap-4 w-[25%]">
        <div className="h-[100px] w-[100px] rounded-full bg-white flex justify-center items-center">
          <FiBox className="text-5xl" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-[18px]">Premium Support</p>
          <p className="text-[14px]">Outstanding Premium Support</p>
        </div>
      </div>
    </section>
  )
}

export default Shipping