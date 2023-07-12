import React from "react";
import SideAddonItems from "../SideAddonItems/SideAddonItems";
import './style.css'
const SideAddonItemsList = () => {
  return (
    <div>
      <div className="sideItems">
        <SideAddonItems />
        <SideAddonItems />
        <SideAddonItems />
        <SideAddonItems />
        <SideAddonItems />
        <SideAddonItems />
      </div>
    </div>
  );
};

export default SideAddonItemsList;
