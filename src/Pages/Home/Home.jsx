import React, { useState } from "react";

import BkSpecials from "../../components/BkSpecials/BKSpecials";
import Recommend from "../../components/Recommend/Recommed";
import CarouselBanner from "../../components/CarouselBanner/CarouselBanner";
import BannerImg from "../../components/BannerImg/BannerImg";
import Favourites from "../../components/Favourites/Favourites";
import PopUpAddOn from "../../components/AddOnItemsCheck/PopUpAddOn";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import Popup from "../../components/Popup/Popup";
import OurMenu from "../../components/OurMenu/OurMenu";
import KingDeal from "../../components/KingDealOfTheDay/KingDeal";
const Home = () => {
  const data = useSelector((state) => state.additem.AddPopup);

  return (
    <div>
      {/* <CarouselBanner /> */}
      <OurMenu />
      <KingDeal />

      <Favourites />

      {data && <Popup />}
      <BkSpecials />
      <Recommend />
      <BannerImg />
      <Footer />
    </div>
  );
};

export default Home;
