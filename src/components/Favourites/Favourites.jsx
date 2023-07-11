import React from "react";
import ItemCard from "../ItemCard/ItemCard";
import Popup from "../Popup/Popup";
import "./style.css";
function Favourites() {
  return (
    <div className="favourites">
      <div className="favourites_wrapper">
        <span className="heading">FAVOURITES</span>
        <div className="favourite_items">
          <div>
            <ItemCard
              title="Crunchy Chicken Velcono"
              price="230"
              link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"
            />
          </div>
          <ItemCard
            title="Panner Rolye Burger"
            price="230"
            link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20210430124031626820_262x360jpg"
          />
          <ItemCard
            title="Panner Rolye Burger"
            price="230"
            link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20211223202438689889_262x360jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Favourites;
