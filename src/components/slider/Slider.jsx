import "./slider.css";
import FirstWatch from "../../images/Watch1.png";
import SecondWatch from "../../images/Watch2.png";
import ThirdWatch from "../../images/Watch3.png";
import { useState } from "react";
import Arrow from "./Arrow";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  // Handle Click
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };
  return (
    <div className="slider-container">
      {slideIndex !== 0 && (
        <Arrow
          handleClick={() => handleClick("left")}
          className="bi bi-chevron-double-left arrow-left"
        />
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
        className="slider-wrapper"
      >
        <div className="slide first-slide">
          <div className="slide-image-wrapper">
            <img src={FirstWatch} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">best seller of rolex 2022</h1>
            <p className="slide-info-desc">
              More than 30 Rolex Watches have been sold this year, and we are
              still trusted by everyone
            </p>
          </div>
        </div>
        <div className="slide second-slide">
          <div className="slide-image-wrapper">
            <img src={SecondWatch} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">
              Omega is best choice for automatic fan
            </h1>
            <p className="slide-info-desc">Available in all colors and sizes</p>
          </div>
        </div>
        <div className="slide third-slide">
          <div className="slide-image-wrapper">
            <img src={ThirdWatch} alt="" />
          </div>
          <div className="slide-info-wrapper">
            <h1 className="slide-info-title">
              Best jewelry with patick phillippe
            </h1>
            <p className="slide-info-desc">Available in all colors and sizes</p>
          </div>
        </div>
      </div>
      {slideIndex !== 2 && (
        <Arrow
          handleClick={() => handleClick("right")}
          className="bi bi-chevron-double-right arrow-right"
        />
      )}
    </div>
  );
};

export default Slider;
