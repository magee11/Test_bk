import React from "react";
import "./style.css";

const PopUpAddOn = () => {

  return (
    <div className="AddOnItems">
      <div className="AddOnItem">
        <img
          src="https://www.burgerking.in/static/media/veg.2d5a7ccc.svg"
          alt=""
        />
        <p>Medium Fries + Chocolate Thick Shake(26% OFF)</p>
        <p>₹ 195/-</p>
        <input type="checkbox" className="checkbox-round" />
      </div>
      <div />
    </div>
  );
};

export default PopUpAddOn;
