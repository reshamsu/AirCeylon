import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "/assets/office-desk.jpeg",
  "/assets/office-counter.jpeg",
  "/assets/meeting_room.jpg",
  "/assets/interview.jpg",
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 11000,
    arrows: false,
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "240px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
