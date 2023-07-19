import React from "react";
import "./style.css";
const Scroll_Items = ({ title, url }) => {
  return (
      <div className="menuItems">
        <div className="card_img">
          <img className="menuItemImg" src={url} alt="" />
        </div>
        <div className="card_text">{title}</div>
      </div>
  );
};

export default Scroll_Items;
