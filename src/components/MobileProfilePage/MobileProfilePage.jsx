import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
const MobileProfilePage = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/");
  };
  return (
    <div className="MobileProfilePage">
      <div className="ProfilePage_wrapper">
        <div className="CloseBar" onClick={handleback}>
          <div>
            <img
              src="https://www.burgerkingdev.in/static/media/left-arrow.e2f47880.svg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://www.burgerkingdev.in/static/media/notification-icon.fb90cf7c.svg"
              alt=""
            />
          </div>
        </div>
        <div className="ProfileDetails">
          <div className="profileImg">
            <img
              className="ProfileImg"
              src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?size=626&ext=jpg&ga=GA1.1.1432586096.1688362872&semt=ais"
              alt=""
            />
          </div>
          <div className="profileName">
            <span className="username">MAGESH A</span>
            <span className="userPhonenumber">+91 9442497141</span>
          </div>
        </div>
        <div className="profileItemList">
          <div className="BKcrownTab">
            <div className="crownImgBg">
              <img
                className="bkcrownimg"
                src="https://www.burgerkingdev.in/static/media/crown.9223ee0e.png"
                alt=""
              />
            </div>
            <div className="BkcrownsText">
              <span className="NoOfCrowns">873</span>
              <span className="SpanBkcrowns">Bk Crowns</span>
            </div>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/recent-order.b1520f88.svg"
              alt=""
            />
            <span className="ListTabNames">Recent Orders</span>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/location.b472e06f.svg"
              alt=""
            />
            <span className="ListTabNames">Saved Address</span>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/voucher-icon.af5151fc.svg"
              alt=""
            />
            <span className="ListTabNames">Saved King Deals</span>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/bk-wall-icon-active.9f81a84f.svg"
              alt=""
            />
            <span className="ListTabNames">BK Wall</span>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/support-icon.e8b33fc0.svg"
              alt=""
            />
            <span className="ListTabNames">FAQ's & Supports</span>
          </div>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/settings-orange.9dbb69d3.svg"
              alt=""
            />
            <span className="ListTabNames">Setting</span>
            <img
              className="setingsArrow"
              src="https://www.burgerkingdev.in/static/media/right-arrow.073e1c9d.svg"
              alt=""
            />
          </div>
          <span className="lineProfile"></span>
          <div className="ListTabs">
            <img
              src="https://www.burgerkingdev.in/static/media/dine-in.1e8f5361.svg"
              alt=""
            />
            <span className="FindRestaurent">Find Restaurent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProfilePage;
