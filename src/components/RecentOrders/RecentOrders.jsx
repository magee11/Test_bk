import React from "react";
import OrdersList from "../Orders/OrdersList";
import "./style.css";
const RecentOrders = () => {
  return (
    <div>
      <div className="heading_right">Recent orders</div>
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
      <OrdersList
        OrderId={"23245"}
        Product={"Veg Whopper"}
        OrderStatus={"CANCELLED"}
      />
    </div>
  );
};

export default RecentOrders;
