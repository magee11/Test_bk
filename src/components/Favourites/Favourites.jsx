import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import "./style.css";
import axios from "axios";
function Favourites() {
  const [ProductData, setProductData] = useState("");
  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/products");
        setProductData(response.data.content);
      } catch (e) {
        console.log(e, "error");
      }
    };
    fetchProductsData();
    // {ProductData && ProductData.map((product) =>()
  }, []);
  return (
    <div>
      <div className="favourites">
        <div className="favourites_wrapper">
          <span className="heading">FAVOURITES</span>
          <div className="favourite_items">
            {ProductData &&
              ProductData.map((product) => (
                <div>
                  <ItemCard
                    title={product.name}
                    price="287"
                    link="https://d1rgpf387mknul.cloudfront.net/products/Home/web/2x_web_20221128053156334858_262x360jpg"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
