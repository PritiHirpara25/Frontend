import React from "react";
import { ThumbnailsExample } from "../Components/SplideThubmail";
import ProductSide from "../Components/PoductSide";

const ZoomSection = () => {
  return (
    <div
      className="container-section grid lg:grid-cols-2 mt-5 gap-5 overflow-x-hidden"
      id="Parent"
    >
      <div className=" p-[12px] relative overflow-x-hidden lg:overflow-visible">
        <ThumbnailsExample />
        <div
          id="ImageZoomOutPut"
          className="absolute top-0 left-full h-[400px] w-[400px]  m-[12px] rounded-[5px]"
        ></div>
      </div>
      <ProductSide />
    </div>
  );
};

export default ZoomSection;