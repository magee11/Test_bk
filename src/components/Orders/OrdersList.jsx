import React from "react";
import "./style.css";

const OrdersList = ({ OrderId, OrderStatus, Product }) => {
    
  return (
    <div className="Content_items">
      <div className="content_top">
        <span className="order_text">ORDER #{OrderId}</span>
        <span className="order_status">{OrderStatus}</span>
      </div>

      <div className="content_bottom">
        <span className="order_product">{Product}</span>
        <br />
        <span className="Order_date_time">Rs.145 &nbsp;| &nbsp;30Jun &nbsp; 11:34 &nbsp; PM </span>
      </div>
    </div>
  );
};

export default OrdersList;
