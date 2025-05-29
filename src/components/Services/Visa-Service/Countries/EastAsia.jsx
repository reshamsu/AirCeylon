import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attractions = [
  {
    img: "/assets/east-asia-japan.jpg",
    title: "Tokyo, Japan",
    location: "Japan",
    description:
      "A dazzling fusion of ancient temples and futuristic skylines — Tokyo offers a dynamic experience at every corner.",
    info: "Tokyo, Japan",
  },
  {
    img: "/assets/east-asia-china.jpg",
    title: "Great Wall, China",
    location: "China",
    description:
      "Walk along one of the world’s greatest wonders — the Great Wall winds through ancient landscapes and dynastic history.",
    info: "Great Wall, China",
  },
  {
    img: "/assets/east-asia-korea.jpg",
    title: "Seoul, South Korea",
    location: "South Korea",
    description:
      "A cultural powerhouse — explore Seoul’s palaces, K-pop districts, vibrant street food, and cutting-edge fashion.",
    info: "Seoul, South Korea",
  },
  // {
  //   img: "./assets/europe-spain.jpg",
  //   title: "Madrid, Spain",
  //   location: "Spain",
  //   description:
  //     "From flamenco rhythms to regal boulevards — Madrid pulses with art, flavor, and the warmth of Spanish spirit.",
  //   info: "Madrid, Spain",
  // },
  // {
  //   img: "./assets/europe-canada.webp",
  //   title: "Toronto, Canada",
  //   location: "Canada",
  //   description:
  //     "Toronto is a multicultural mosaic — where skyscrapers meet the shores of Lake Ontario and every street tells a global story.",
  //   info: "Toronto, Canada",
  // },
  // {
  //   img: "./assets/east-asia-singapore.jpg",
  //   title: "Singapore",
  //   location: "Singapore",
  //   description:
  //     "A futuristic skyline meets lush green sanctuaries — explore Singapore’s seamless blend of innovation, culture, and cuisine.",
  //   info: "Marina Bay, Singapore",
  // },
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    arrows: false,
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="landing-slider2">
      <Container className="container">
        <div className="container-fluid">
          <label>East Asia</label>
          <h1>Visit East Asia</h1>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div
              key={index}
              style={{ padding: "0 10px", boxSizing: "border-box" }}
            >
              <div
                className="slide-card"
                style={{
                  borderRadius: "18px",
                  background: "#222",
                  overflow: "hidden",
                  height: "100%",
                  margin: "1rem",
                }}
              >
                <div className="image">
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "220px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </div>
                <div className="card-body" style={{ padding: "1rem" }}>
                  <a
                    href={`/hero/?book=${encodeURIComponent(item.location)}`}
                    style={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      margin: "0.75rem 0",
                      textDecoration: "none",
                      color: "var(--text-gold-hover)",
                      fontSize: "1.05rem",
                    }}
                  >
                    <FaLocationDot style={{ marginRight: "6px" }} />
                    {item.title}
                  </a>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#fff",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <label style={{ fontSize: "0.85rem", color: "#aaa" }}>
                    {item.info}
                  </label>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
};

export default Gallery;
