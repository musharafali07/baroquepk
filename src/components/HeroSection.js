import React from "react";
import Carousel from "react-bootstrap/Carousel";
// import Gotop from "../Components/Gotop/Gotop";
// import Whatsapp from "../Components/Whatsapp/Whatsapp";
// import Newsletter from "../Components/Newsletter/Newsletter";
// import Collection from "../Components/Collection";

function HeroSection() {
  return (
    <>
      <Carousel variant="light" className="h-10">
        <Carousel.Item>
          <img className="w-100 h-20" src="./image/main.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-20" src="./image/main.jpg" alt="" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 h-20" src="./image/main.jpg" alt="" />
        </Carousel.Item>
      </Carousel>

      {/* <Collection/>
      <Newsletter />
      <Gotop />
      <Whatsapp /> */}
    </>
  );
}

export default HeroSection;
