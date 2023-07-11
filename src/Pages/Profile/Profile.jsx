import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Popup from "../../components/Popup/Popup";
import SideMenu from "../../components/SideMenu/SideMenu";
import BK_Crowns_Button from "../../components/BK_Crowns/BK_Crowns_Button";
import UserDetailsTab from "../../components/UserDetailsTab/UserDetailsTab";
import Footer from "../../components/Footer/Footer";
import SideMenuItems from "../../components/SideMenuItems/SideMenuItems";
import RecentOrders from "../../components/RecentOrders/RecentOrders";
import SavedAddress from "../../components/SavedAddress/SavedAddress";
import { useSelector } from "react-redux";

const Profile = () => {
  const data = useSelector((state) => state.popup.profile_data);
  console.log(data, "hello");
  return (
    <div className="Profile">
      <div className="ProfileWrapper">
        <h1>Profile</h1>
        <div className="account">
          <div className="account-left">
            {/* Profile Card */}
            <UserDetailsTab />
            {/* BK Crowns */}
            <BK_Crowns_Button />
            {/* Side List */}
            <SideMenuItems />
            {/* Saved Address */}
          </div>
          <div className="account-right">
            <div className="right_content">
              {data =="recent_order" && <RecentOrders />}
              {data =="saved_address" && <SavedAddress />}
            </div>

            <div className="Logout">
              <Link to={"/"}>
                <button className="LogoutBtn">Logout</button>
              </Link>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
