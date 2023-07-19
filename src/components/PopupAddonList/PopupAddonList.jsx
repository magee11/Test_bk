import React from "react";
import PopUpAddOn from "../AddOnItemsCheck/PopUpAddOn";
import "./style.css";
const PopupAddonList = () => {
  return (
    <div>
      <div classname="MakeItAMeal">
        <span className="MakeitAMeals">Make It as Meals</span>
        <PopUpAddOn />
        <PopUpAddOn />
        <PopUpAddOn />
        <PopUpAddOn />
        <PopUpAddOn />
        <PopUpAddOn />
      </div>
    </div>
  );
};

export default PopupAddonList;
