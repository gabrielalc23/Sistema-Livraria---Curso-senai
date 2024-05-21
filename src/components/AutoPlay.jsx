import React from "react";
import Slider from "react-slick";
import pablin from '../../public/ActorsImgs/pablin.jpg';
import harry from '../../public/ActorsImgs/harry.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (

    <div className="slider-container">
      <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      <Slider {...settings} className="d-flex justify-content-center align-items-center bg-dark">
        <div>
          <img src={harry} className=" border rounded-circle" width={200}/>
        </div>
        <div>
          <img src={harry} className="rounded-circle" width={200} />
        </div>
        <div>
          <img src={harry} className="rounded-circle" width={200} />
        </div>
        <div>
          <img src={harry} className="rounded-circle" width={200} />
        </div>
        
      </Slider>
    </div>
    );
}

export default AutoPlay;
