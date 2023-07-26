import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// requires a loader
import "./style.css";
const CarouselBanner = () => {
  const webCarousel = [
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20210427104439040609_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230126172947736454_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20221125145558094449_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20221216122503975684_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20220728013602534392_1440x300jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20211122071148025490_1440x300jpg",
  ];

  const mobCarousel = [
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20211109115920120357_750x400jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20221216122503449170_750x400jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20221216122503449170_750x400jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20220728013602116636_750x400jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20220924063132082746_750x400jpg",
    "https://d1rgpf387mknul.cloudfront.net/products/Home/ms/2x_ms_20220826122847430660_750x400jpg",
  ];
  const { innerWidth } = window;
  return (
    <div className="CarouselPlacer">
      <Carousel
        className="CarouselPlacer"
        autoPlay="true"
        infiniteLoop="true"
        showThumbs={false}
        transitionTime="10s"
        showArrows={false}
      >
        {innerWidth > 1023
          ? webCarousel.map((link) => (
              <div>
                <img src={link} />
              </div>
            ))
          : mobCarousel.map((link) => (
              <div>
                <img src={link} />
              </div>
            ))}
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
