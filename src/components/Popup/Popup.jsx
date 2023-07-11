import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addpopup } from "../../redux/app/counter/AddPopUp";
import PopupAddonList from "../PopupAddonList/PopupAddonList";
import SideAddonItemsList from "../SideAddonItemsList/SideAddonItemsList";
import Popup_Top from "../PopUp_Top/Popup_Top";
const Popup = () => {
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(addpopup());
  };

  return (
    <div className="Popup">
      <div className="backdrop" onClick={handler} />
      <div className="Popup_wrapper" onClick={handler()}>
        <Popup_Top/>
        <PopupAddonList />
        <div className="Sides">
          <p className="textSides"> Sides</p>
          <SideAddonItemsList/>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Popup;
