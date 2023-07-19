import React from "react";
import "./BannerImg.css";
function BannerImg() {
  const webUrl =
    "https://www.burgerkingdev.in/static/media/home-bk-wall.96e21fb4.jpg";
  const mobUri =
    "https://www.burgerkingdev.in/static/media/home-bk-wall-mob.d8628d53.jpg";
  const { innerWidth } = window;
  return (
    <div>
      <div>
        <div className="exploreBtn">Explore Full Menu</div>
      </div>
      <div className="banner_img_div">
        <img
          className="banner_img"
          src={innerWidth > 1023 ? webUrl : mobUri}
          alt=""
        />

      </div>
    </div>
  );
}

export default BannerImg;
