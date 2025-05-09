import React from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import { IoBed } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const attractions = [
  {
    img: "/assets/hotels/hotel_destination1.jpg",
    title: "North Santorini - A Luxury Spa Hotel, Santorini",
    location: "Greece",
    description:
      "Clifftop views, whitewashed beauty, and tranquil luxury — Santorini offers the perfect escape bathed in Aegean sunshine.",
    info: "Greece, Santorini",
  },
  {
    img: "/assets/hotels/hotel_destination2.jpg",
    title: "Atlantis The Royal - Palm Jumeirah, Dubai",
    location: "Dubai, United Arab Emirates",
    description:
      "Discover ultra-modern indulgence — from sky-high suites to private beaches, Dubai redefines luxury at every turn.",
    info: "Dubai, United Arab Emirates",
  },
  {
    img: "/assets/hotels/hotel_destination3.jpg",
    title: "ITC Ratnadipa, A Luxury Collection Hotel, Colombo",
    location: "Colombo",
    description:
      "Nestled by the Indian Ocean, Colombo blends colonial elegance with vibrant street life — an emerging gem in South Asia.",
    info: "Colombo, Sri Lanka",
  },
  {
    img: "/assets/hotels/hotel_destination4.webp",
    title: "Suite in Paris, Shangri-La Paris",
    location: "Paris, France",
    description:
      "Wake up to Eiffel Tower views and Parisian grandeur — art, romance, and fine living await in the City of Light.",
    info: "Paris, France",
  },
  {
    img: "/assets/hotels/hotel_destination5.jpg",
    title: "InterContinental Toronto Center by IHG, Toronto",
    location: "Toronto, Canada",
    description:
      "Downtown buzz meets lakeside calm — explore Toronto’s diverse neighborhoods, culinary scene, and cultural hotspots.",
    info: "Toronto, Canada",
  },
  {
    img: "/assets/hotels/hotel_destination6.jpg",
    title: "Marine Bay Sands Hotel, Singapore",
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
    arrows: true, // ✅ Show default left/right arrows
    swipe: true,
    touchMove: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container id="destinations" style={{ padding: "2rem 0" }}>
      <div className="gallery-section">
        <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem" }}>
          Hotel <span style={{ color: "#1976d2" }}>Destinations</span>
        </h2>

        <Slider {...settings}>
          {attractions.map((item, index) => (
            <div
              className="card"
              key={index}
              style={{ padding: "0 10px", cursor: "grab" }}
            >
              <div className="image">
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    borderRadius: "8px",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="card-body" style={{ padding: "0.75rem" }}>
                <a
                  href={`/home/learnmore?book=${encodeURIComponent(item.location)}`}
                  style={{
                    fontWeight: "bold",
                    display: "block",
                    margin: "10px 0",
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  <IoBed style={{ marginRight: "5px" }} />
                  {item.title}
                </a>
                <p style={{ fontSize: "0.9rem", color: "#444" }}>
                  {item.description}
                </p>
                <label style={{ fontSize: "0.85rem", color: "#777" }}>
                  {item.info}
                </label>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default Gallery;
