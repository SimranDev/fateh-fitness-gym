import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";
import "./carousel_slider.css";
import SocialLinks from "./SocialLinks/SocialLinks";

const CarouselSlider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-center-items">
        <div className="carousel-msg">
          The most advanced and premium fitness studio of district Gurdaspur!
        </div>
        <div className="slider-social-links">
          <div>
            <SocialLinks />
          </div>
        </div>
      </div>
      <Carousel
        className="carousal"
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={6000}
      >
        <div>
          <img src={img1} alt="img 1" />
        </div>
        <div>
          <img src={img2} alt="img 2" />
        </div>
        <div>
          <img src={img3} alt="img 3" />
        </div>
        <div>
          <img src={img4} alt="img 4" />
        </div>
        <div>
          <img src={img5} alt="img 5" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
