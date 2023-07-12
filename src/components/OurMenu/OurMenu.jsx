import React from "react";
import Scroll_Items from "../ScrollItems/Scroll_Items";
import Scroll_items_list from "../Scroll_Items_list/Scroll_items_list";
import "./style.css";
function OurMenu() {
  return (
    <div className="ourmenu">
      <div className="ourmenu_wrapper">
        <span className="heading1">OUR MENU</span>
        <Scroll_items_list />
      </div>
    </div>
  );
}

export default OurMenu;
