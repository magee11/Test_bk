import React from "react";
import "./style.css";
const Address = ({location, address}) => {
  return (
    <div className="Address">
      <div className="location_img">
        <img
          src="https://www.burgerkingdev.in/static/media/location-inactive.5c90b89a.svg"
          alt=""
        />
      </div>
      <div className="address_text">
        <span className="address_location">{location}</span>
        <br />
        <span className="address_info">{address}</span>
      </div>
    </div>
  );
};

export default Address;
