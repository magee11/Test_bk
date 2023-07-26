import React, { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addpopup } from "../../redux/app/counter/AddPopUp";
import regularImg from "../../assests/Images/regular.png";
import largeImg from "../../assests/Images/large.png";
import burgerOnly from "../../assests/Images/burgerOnly.png";
import AdditionalItems from "../../components/AdditionalItems/AdditionalItems";
import Modify from "../Modify/Modify";
const Popup = () => {
  const [activeSize, setActiveSize] = useState("regular");
  const [TopImgBanner, setTopImgBanner] = useState(
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handler = () => {
    dispatch(addpopup());
  };
  const regular_handler = () => {
    setActiveSize("regular");
    setTopImgBanner(
      "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"
    );
  };
  const large_handler = () => {
    setActiveSize("large");
    setTopImgBanner(
      "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20220221050350365005_262x360jpg"
    );
  };
  const only_burger_handler = () => {
    setActiveSize("burger_only");
    setTopImgBanner(
      "https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221115131212013068_262x360jpg"
    );
  };
  const CustomizeSliderArr = ["Customize", "Choose Side", "Choose Drink"];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSliderClick = (index) => {
    setActiveIndex(index);
  };
  const [isCustomize, setIsCustomize] = useState(false);
  const handleCustomize = () => {
    setIsCustomize(!isCustomize);
  };

  return (
    <div className="Popup">
      <div className="backdrop" onClick={handler} />
      <div className="Popup_wrapper_initial">
        <div className="popup_heading">
          <span>Veg Whopper</span>
        </div>
        <div className="popup_content">
          <div className="popup_content_left">
            <img className="popup_content_left_img" src={TopImgBanner} alt="" />
          </div>
          <div className="popup_content_right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem.
            </p>
          </div>
        </div>
        <div className="size_type">
          <div
            className={`regular size_card ${
              activeSize === "regular" ? "SizeActive" : ""
            }`}
            onClick={regular_handler}
          >
            <div className="size_type_img_div">
              <img className="size_type_img" src={regularImg} alt="" />
            </div>
            <div className="size_type_img_text">
              <span>
                {activeSize == "regular" ? "Regular Meals" : "Medium Meals"}
              </span>
              <span>
                $100 <s>$169</s>
              </span>
              <input
                type="checkbox"
                className="checkbox-round"
                checked={activeSize === "regular" ? true : false}
              />
            </div>
          </div>
          <div
            className={`large size_card ${
              activeSize === "large" ? "SizeActive" : ""
            }`}
            onClick={large_handler}
          >
            <div className="size_type_img_div">
              <img className="size_type_img" src={largeImg} alt="" />
            </div>
            <div className="size_type_img_text">
              <span>Large</span>
              <span>
                $123 <s>$209</s>
              </span>
              <input
                type="checkbox"
                className="checkbox-round"
                checked={activeSize === "large" ? true : false}
              />
            </div>
          </div>
          <div
            className={`large size_card ${
              activeSize === "burger_only" ? "SizeActive" : ""
            }`}
            onClick={only_burger_handler}
          >
            <div className="size_type_img_div">
              <img className="size_type_img" src={burgerOnly} alt="" />
            </div>
            <div className="size_type_img_text">
              <span>Burger Only</span>
              <span>$70</span>
              <input
                type="checkbox"
                className="checkbox-round"
                checked={activeSize === "burger_only" ? true : false}
              />
            </div>
          </div>
        </div>
        <div className="bottom_button">
          <div className="back_btn" onClick={handler}>
            Back
          </div>
          <div className="continue_btn" onClick={handleCustomize}>
            Continue
          </div>
        </div>
      </div>
      {isCustomize && (
        <div className="Popup_wrapper_next">
          <div className="productcustomize">
            <div className="CustomizeProductImgDiv">
              <img
                className="CustomizeProductImg"
                src="https://d1rgpf387mknul.cloudfront.net/products/PLP/web/2x_web_20220909062728999724_482x264jpg"
                alt=""
              />
              <span className="customizeTitle">Veg Whooper Meals</span>
            </div>
            <div className="customizeSlider">
              {CustomizeSliderArr.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    handleSliderClick(index);
                  }}
                >
                  <span
                    className={index === activeIndex ? "selectedSlider" : ""}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <AdditionalItems />

            <Modify />
          </div>
          <div className="bottom_button_next">
            <div className="back_btn" onClick={handleCustomize}>
              Back
            </div>
            <div
              className="continue_btn"
              onClick={() => {
                navigate("/cart");
              }}
            >
              Continue
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
