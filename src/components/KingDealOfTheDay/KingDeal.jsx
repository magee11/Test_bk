import React from "react";
import "./style.css";
const KingDeal = () => {
  return (
    <div className="kingDeals">
      <div className="kingDeals_wrapper">
        <span className="bk_deals ">KING DEALS OF THE DAY</span>
        <div className="Deals_scroll_wrapper">
          <div className="Deals">
            <img
              className="Deals_img"
              src="https://d1rgpf387mknul.cloudfront.net/16587461961x1119x540jpg"
              alt=""
            />
            <img
              className="Deals_img"
              src="https://d1rgpf387mknul.cloudfront.net/16673234431x1119x540jpg"
              alt=""
            />
            <img
              className="Deals_img"
              src="https://d1rgpf387mknul.cloudfront.net/16675832361x1119x540jpg"
              alt=""
            />
            <img
              className="Deals_img"
              src="https://d1rgpf387mknul.cloudfront.net/16602707781x1119x540jpg"
              alt=""
            />{" "}
            <img
              className="Deals_img"
              src="https://d1rgpf387mknul.cloudfront.net/16587461961x1119x540jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KingDeal;
