import React from "react";
import StoreLocationList from "../../components/StoreLocationList/StoreLocationList";
import "./style.css";
const Nearlyby = () => {
  return (
    <div className="nearlyby">
      <div className="nearlyby_wrapper">
        <div className="search_top">
          <div className="search-bar">
            <div className="search_portion">
              <img
                src="https://www.burgerkingdev.in/static/media/search.03064934.svg"
                alt=""
              />
              <input
                type="text"
                className="store_search"
                placeholder="Search for your location "
              />
            </div>
            <div className="detect_location">
              <img
                src="https://www.burgerkingdev.in/static/media/detect-location.054d5431.svg"
                alt=""
              />
              <p>detect location</p>
            </div>
          </div>
        </div>
        <div className="Store_locations">
          <StoreLocationList />
        </div>
      </div>
    </div>
  );
};

export default Nearlyby;
