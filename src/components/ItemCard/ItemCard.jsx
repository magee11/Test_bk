import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../../redux/app/counter/Cart";
import { addpopup } from "../../redux/app/counter/AddPopUp";

import "./style.css";
import Popup from "../Popup/Popup";
function ItemCard(porps) {
  const dispatch = useDispatch();
  return (
    <div className="itemcard">
      <div className="itemcard_wrapper">
        <div className="itemcard_image_div">
          <img src={porps.link} alt="" />
        </div>
        <div className="itemcard_text">
          <span className="itemcard_titile">{porps.title}</span>
          <span className="itemcard_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
          <div className="footer_wrapper">
            <div className="itemcard_footer">
              <span className="itemPrice">₹{porps.price}/-</span>
              <div
                className="addToCart"
                onClick={() => {
                  dispatch(addpopup());
                }}
              >
                <span className="addToCartText">Add +</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
