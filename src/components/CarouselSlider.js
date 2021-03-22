import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/image1.jpg";
import img2 from "../images/image2.jpg";
import img3 from "../images/image3.jpg";
import img4 from "../images/image4.jpg";
import img5 from "../images/image5.jpg";
import Button from "./Button";

import "./carousel_slider.css";

const CarouselSlider = () => {
  return (
    <Carousel
      className="carousel-container"
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={true}
      interval={6000}
    >
      <div>
        <div>
          <li className="x">
            The most advanced and premium fitness studio of district{" "}
            <b>GURDASPUR</b>
          </li>
          <div className="y">
            <Button buttonStyle="btn--primary--outline" buttonSize="btn--large">
              SIGN UP TODAY
            </Button>
          </div>
        </div>

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
  );
};

export default CarouselSlider;
