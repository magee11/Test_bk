import React from "react";
import "./style.css";
const SideMenu = ({ title, onclickHandeler }) => {
  let value;
  if (title === "Recent Orders") {
    let value = "recent_orders";
  }
  if (title === "Saved Address") {
    let value = "saved_address";
  }
  console.log(value, "page rendering");
  return (
    <div
      className="Side_List"
      onClick={() => {
        onclickHandeler("value");
      }}
    >
      <ul>
        <li>
          <div className="side_option">
            <div className="side_option_img">
              <img
                src="https://www.burgerkingdev.in/static/media/recent-order-active.c4e4597f.svg"
                alt=""
              />
            </div>
            <div className="side_option_text">
              <span className="side_option_text_heading">{title}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
