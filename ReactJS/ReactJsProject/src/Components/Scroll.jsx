import React from "react";
import styles from "./OffersMarquee.module.css";
import { IoMdArrowDropup } from "react-icons/io";

// import { AiFillThunderbolt } from "react-icons/ai";

const Scroll = () => {
  return (
    <div className={`${styles.textWrapper} overflow-x-hidden`}>
      <div>
        <span><IoMdArrowDropup /></span>
        <p>free shipping and return</p>
        <span><IoMdArrowDropup /></span>
        <p>new season,new styles:fashion sale you can't miss</p>
        <span><IoMdArrowDropup /></span>
        <p>limited time offer:fashion sale you can't resist</p>
      </div>
      <div>
        <span><IoMdArrowDropup /></span>
        <p>free shipping and return</p>
        <span><IoMdArrowDropup /></span>
        <p>new season,new styles:fashion sale you can't miss</p>
        <span><IoMdArrowDropup /></span>
        <p>limited time offer:fashion sale you can't resist</p>
      </div>
      <div>
        <span><IoMdArrowDropup /></span>
        <p>free shipping and return</p>
        <span><IoMdArrowDropup /></span>
        <p>new season,new styles:fashion sale you can't miss</p>
        <span><IoMdArrowDropup /></span>
        <p>limited time offer:fashion sale you can't resist</p>
      </div>
      <div>
        <span><IoMdArrowDropup /></span>
        <p>free shipping and return</p>
        <span><IoMdArrowDropup /></span>
        <p>new season,new styles:fashion sale you can't miss</p>
        <span><IoMdArrowDropup /></span>
        <p>limited time offer:fashion sale you can't resist</p>
      </div>
      <div>
        <span><IoMdArrowDropup /></span>
        <p>free shipping and return</p>
        <span><IoMdArrowDropup /></span>
        <p>new season,new styles:fashion sale you can't miss</p>
        <span><IoMdArrowDropup /></span>
        <p>limited time offer:fashion sale you can't resist</p>
      </div>
    </div>
  );
};

export default Scroll;
