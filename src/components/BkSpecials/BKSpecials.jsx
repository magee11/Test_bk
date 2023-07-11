import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import './style.css'
function BKSpecials() {
  return (
    <div className="bk_special_wrapper">
      <div className="">
        <span className="heading">BKSpecials</span>
        <div className="BK_Special_Items">
          <ItemCard title="VEG WHOPPER" price="435" link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"/>
          <ItemCard title="VEG WHOPPER" price="435" link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"/>
        </div>
      </div>
    </div>
  );
}

export default BKSpecials;
