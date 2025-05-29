import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attractions = [
  {
    img: "/assets/middle-east-kuwait.jpg",
    title: "Kuwait City, Kuwait",
    location: "Kuwait",
    description:
      "A blend of modernity and tradition — discover Kuwait City's coastal skyline, souks, and stunning cultural institutions.",
    info: "Kuwait City, Kuwait",
  },
  {
    img: "/assets/middle-east-dubai.jpg",
    title: "Dubai, UAE",
    location: "UAE",
    description:
      "Futuristic skyscrapers, luxury shopping, and desert adventures — Dubai is a global hub of innovation and opulence.",
    info: "Dubai, UAE",
  },
  {
    img: "/assets/middle-east-petra.jpg",
    title: "Petra, Jordan",
    location: "Jordan",
    description:
      "Step into a lost city carved from rose-red stone — Petra is Jordan’s most breathtaking archaeological wonder.",
    info: "Petra, Jordan",
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
    <div className="landing-slider">
      <Container className="container">
        <div className="container-fluid">
          <label>Middle East</label>
          <h1>
            Visit <span className="gradient-text">Middle East</span>
          </h1>
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
                  background: "#fff",
                  overflow: "hidden",
                  height: "100%",
                  margin: "0 1rem",
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
                      color: "#444",
                      fontWeight: "400",
                      lineHeight: "1.5",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {item.description}
                  </p>
                  <label style={{ fontSize: "0.85rem", color: "#999" }}>
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
