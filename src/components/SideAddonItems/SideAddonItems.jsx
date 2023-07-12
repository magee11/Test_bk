import React from "react";
import './style.css'
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/app/counter/Cart";
const SideAddonItems = () => {
    const dispatch = useDispatch();
  
  return (
    <div>
      <div className="sideItem">
        <div className="ItemImg">
          <img
            className="SlideImg"
            src="https://d1rgpf387mknul.cloudfront.net/products/AE/web/1x_web_20230314074438543242_158x79jpg"
            alt=""
          />
        </div>
        <div className="ItemText-1">
          <p className="">King Fries</p>
          <img
            src="https://www.burgerking.in/static/media/veg.2d5a7ccc.svg"
            alt=""
          />
        </div>
        <div className="ItemsText-2">
          <span>₹ 200</span>
          <span
            className="ItemAddtoCart"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideAddonItems;
