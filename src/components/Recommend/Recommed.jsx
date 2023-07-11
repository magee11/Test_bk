import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./style.css";

function Recommed() {
  return (
    <div className="recommend_wrapper">
      <div className="">
        <p className="heading">Recommed</p>
      </div>
      <div className="recommed_items">
        <ItemCard
          title="Crunchy Chicken Velcono"
          price="230"
          link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"
        />
        <ItemCard
          title="Panner Rolye Burger"
          price="230"
          link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20211223202438689889_262x360jpg"
        />
        <ItemCard
          title="Panner Rolye Burger"
          price="230"
          link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20211223202438689889_262x360jpg"
        />
      </div>
    </div>
  );
}

export default Recommed;
