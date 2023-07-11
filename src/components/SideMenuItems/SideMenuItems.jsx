import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import { Profile_data } from "../../redux/app/counter/LoginPop";
import { useDispatch } from "react-redux";
const SideMenuItems = () => {
  const dispatch = useDispatch();
  const recent_orders = () => {
    dispatch(Profile_data("recent_order"));
  };
  const saved_address = () => {
    dispatch(Profile_data("saved_address"));
  };

  return (
    <div>
      <SideMenu title={"Recent Orders"} onclickHandeler={recent_orders} />
      <SideMenu title={"Saved Address"} onclickHandeler={saved_address} />
      <SideMenu title={"Save King Deals"} />
      <SideMenu title={"Notification"} />
      <SideMenu title={"FAQ"} />
      <SideMenu title={"Settings"} />
      <SideMenu title={"Nearly By"} />
    </div>
  );
};

export default SideMenuItems;
