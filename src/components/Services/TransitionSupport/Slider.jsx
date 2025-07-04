import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attractions = [
  {
    img: "/assets/toronto.jpg",
    title: "Accommodation",
    description:
      "Experience comfort, convenience, and quality living with our range of modern, fully-equipped accommodations tailored to your needs.",
    info: "Ontario, Canada",
  },
  {
    img: "/assets/careers.jpg",
    title: "Careers",
    description:
      "Unlock your potential and build a rewarding future with diverse career opportunities in a dynamic and supportive environment.",
    info: "Ontario, Canada",
  },
  {
    img: "/assets/community.jpg",
    title: "Community",
    description:
      "Connect, engage, and grow in a vibrant community where people from all walks of life come together with shared values and purpose.",
    info: "Ontario, Canada",
  },
  {
    img: "/assets/lifestyle-management.jpeg",
    title: "Lifestyle Management",
    description:
      "Enhance your everyday living with personalized support and holistic services that help you balance wellness, work, and life with ease.",
    info: "Ontario, Canada",
  },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 10000,
    arrows: true,
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
          <label>Canada</label>
          <h1>Toronto</h1>
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
                  borderRadius: "10px",
                  background: "#fff",
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
                      color: "var(--text-black-hover)",
                      fontSize: "1.2rem",
                    }}
                  >
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
                  <label
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "600",
                      color: "var(--text-gold-hover)",
                    }}
                  >
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
