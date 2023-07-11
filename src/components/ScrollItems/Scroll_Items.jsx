import React from "react";
import "./style.css";
const Scroll_Items = ({ title, url }) => {
  return (
    <div>
      <div className="menuItems">
        <div className="card_img">
          <img src={url} alt="" />
        </div>
        <div className="card_text">{title}</div>
      </div>
    </div>
  );
};

export default Scroll_Items;
