import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
const Store_Location = () => {
  const [outletData, setOutletData] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/data");
        setOutletData(response.data.content);
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      {outletData &&
        outletData.map((outlet) => (
          <div className="store_locations">
            <div className="location_container">
              <span className="city_location">{outlet.outlet_name}</span>
              <span className="store_timing">{`Store Timing(${outlet.opens_at}to${outlet.closes_at})`}</span>
              <span className="store_address">{outlet.address}</span>
              <span className="current_status">{outlet.message}</span>
              <span className="store_distance">{`${outlet.distance} away . ${outlet.time_to_travel} min`}</span>
            </div>
            <spanc className="line"></spanc>
            <div className="themes">
              <span>Dine-In</span>
              <span>Delivery</span>
              <span>Takeway</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Store_Location;
