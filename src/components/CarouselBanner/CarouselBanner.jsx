import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
// requires a loader
const CarouselBanner = () => {
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
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20210427104439040609_1440x300jpg" />
        </div>
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20230126172947736454_1440x300jpg" />
        </div>
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20221125145558094449_1440x300jpg" />
        </div>
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20221216122503975684_1440x300jpg" />
        </div>
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20220728013602534392_1440x300jpg" />
        </div>
        <div>
          <img src="https://d1rgpf387mknul.cloudfront.net/products/Home/web/1x_web_20211122071148025490_1440x300jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselBanner;
