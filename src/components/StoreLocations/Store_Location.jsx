import React from "react";
import "./style.css";
const Store_Location = () => {
  return (
    <div className="store_locations">
      <div className="location_container">
        <span className="city_location">Indiranagar , Bangalore</span>
        <span className="store_timing">Store Timing(9.00 to 2.00)</span>
        <span className="store_address">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum
        </span>
        <span className="current_status">Open Now</span>
        <span className="store_distance">2.5KM away . 10 min</span>
      </div>
      <spanc className="line"></spanc>
      <div className="themes">
        <span>Dine-In</span>
        <span>Delivery</span>
        <span>Takeway</span>
      </div>
    </div>
  );
};

export default Store_Location;
