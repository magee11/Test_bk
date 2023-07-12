import React from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addpopup } from "../../redux/app/counter/AddPopUp";
import PopupAddonList from "../PopupAddonList/PopupAddonList";
import SideAddonItemsList from "../SideAddonItemsList/SideAddonItemsList";
import Popup_Top from "../PopUp_Top/Popup_Top";
import { decrement, increment } from "../../redux/app/counter/Cart";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handler = () => {
    dispatch(addpopup());
  };

  return (
    <div className="Popup">
      <div className="backdrop" onClick={handler} />
      <div className="Popup_wrapper" onClick={handler()}>
        <div className="AddonItemsList">
          <Popup_Top />
          <PopupAddonList />
          <div className="Sides">
            <p className="textSides"> Sides</p>
            <SideAddonItemsList />
          </div>
        </div>
        <div className="PopUpAddToCart">
          <div className="PopCustomize">
            <div className="CustomizeBtn">
              <span>+</span>
              <span>1</span>
              <span>-</span>
            </div>
          </div>
          <div
            className="Paytocart"
            onClick={() => {
              dispatch(increment());
              dispatch(addpopup());
            }}
          >
            <span>ADD TO CART</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
