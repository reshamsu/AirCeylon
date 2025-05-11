import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attractions = [
  {
    img: "./assets/east-asia-china.jpg",
    title: "The Great Wall of China",
    location: "Greece",
    description:
      "Clifftop views, whitewashed beauty, and tranquil luxury — Santorini offers the perfect escape bathed in Aegean sunshine.",
    info: "China",
  },
  {
    img: "./assets/europe-germany.jpg",
    title: "Frankfort, Germany",
    location: "Germany",
    description:
      "Discover ultra-modern indulgence — from sky-high suites to private beaches, Dubai redefines luxury at every turn.",
    info: "Berlin, Germany",
  },
  {
    img: "./assets/middle-east-maldives.jpg",
    title: "Male, Maldives",
    location: "Maldives",
    description:
      "Nestled by the Indian Ocean, Colombo blends colonial elegance with vibrant street life — an emerging gem in South Asia.",
    info: "Male, Maldives",
  },
  {
    img: "./assets/europe-spain.jpg",
    title: "Madrid, Spain",
    location: "Spain",
    description:
      "Wake up to Eiffel Tower views and Parisian grandeur — art, romance, and fine living await in the City of Light.",
    info: "Esp. Spain",
  },
  {
    img: "./assets/europe-canada.webp",
    title: "Toronto, Canada",
    location: "Canada",
    description:
      "Downtown buzz meets lakeside calm — explore Toronto’s diverse neighborhoods, culinary scene, and cultural hotspots.",
    info: "Toronto, Canada",
  },
  {
    img: "./assets/east-asia-singapore.jpg",
    title: "Singapore",
    location: "Singapore",
    description:
      "Soar above the skyline with rooftop pools and city gardens — Marina Bay Sands defines the future of urban luxury in Singapore.",
    info: "Marine Bay, Singapore",
  },
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
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
    <div className="destinations">
      <Container id="destinations" style={{ padding: "3rem 0" }}>
        <div className="container-fluid">
          <label>Destinations</label>
          <h1>
            Places <span>You can Visit</span>
          </h1>
          <h4>Find your next Destination with Air Ceylon</h4>
        </div>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div key={index} style={{ padding: "0 10px", boxSizing: "border-box" }}>
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
                    href={`/home/learnmore?book=${encodeURIComponent(item.location)}`}
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
                  <label style={{ fontSize: "0.85rem", color: "#999" }}>{item.info}</label>
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
