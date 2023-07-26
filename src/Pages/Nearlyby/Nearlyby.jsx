import React, { useEffect, useState } from "react";
import StoreLocationList from "../../components/StoreLocationList/StoreLocationList";
import "./style.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Store_Location from "../../components/StoreLocations/Store_Location";
import Loader from "../../components/Loader/Loader";
const Nearlyby = () => {
  const { innerWidth } = window;
  const [outletData, setOutletData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/data");
        setOutletData(response.data.content);
        setTimeout(() => setIsLoading(false), 1000);
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="nearlyby">
      <div className="nearlyby_wrapper">
        <div
          className="closeBar"
          onClick={() => {
            handleclick();
          }}
        >
          <img
            src="https://www.burgerkingdev.in/static/media/left-arrow.e2f47880.svg"
            alt=""
          />
          <p className="findabk">FIND A BK</p>
        </div>
        <div className="search_top">
          <div className="search-bar">
            <div className="search_portion">
              <img
                src="https://www.burgerkingdev.in/static/media/search-black.3fb9f3e1.svg"
                alt=""
              />
              <input
                type="text"
                className="store_search"
                placeholder="Search for your location "
              />
            </div>
            {innerWidth > 1023 && (
              <div className="detect_location">
                <img
                  src="https://www.burgerkingdev.in/static/media/detect-location.054d5431.svg"
                  alt=""
                />
                <p>detect location</p>
              </div>
            )}
          </div>
        </div>
        <div className="Store_locations">
          {isLoading ? <Loader /> : <Store_Location />}
        </div>
      </div>
    </div>
  );
};

export default Nearlyby;
