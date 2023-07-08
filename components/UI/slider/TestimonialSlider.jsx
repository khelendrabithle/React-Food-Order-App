import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";
import ava04 from "../../../assets/images/ava-4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        I had breakfast there this morning and dinner tonight. All were well beyond my expectations. 
        Everything is so fresh. Best clam chowder I have ever had. Clams and linguine were out of this world. 
        Breakfast will knock your slippers off.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>Rutvik T.</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
        “I go to breakfast or lunch weekly with a group of older women. 
        In addition to the really good food, I must say that our waitress today was so kind and patient, 
        as the group tried to decide what they wanted and were talking non-stop. 
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Khelendra B.</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "The food is excellent, generous portions and great prices. The service was fast and friendly. 
          I highly recommended it if you are in the Wellfleet area.
          The most amazing food ever! And also the staff is so nice to everyone. 
          I highly recommend buying food from here. The best pizza ever."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Niranjan P.</h6>
        </div>
      </div>

      <div>
        <p className="review__text">
        I had breakfast there this morning and dinner tonight. All were well beyond my expectations. 
        Everything is so fresh. Best clam chowder I have ever had. Clams and linguine were out of this world. 
        Breakfast will knock your slippers off.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />
          <h6>Sushant K.</h6>
        </div>
      </div>

    </Slider>
  );
};

export default TestimonialSlider;
