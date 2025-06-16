import { Container } from "@mui/material";
import React, { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";

// ImageSlider Component
const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div
      className="image-slider"
      style={{
        position: "relative",
        width: "300px",
        height: "200px",
        overflow: "hidden",
        borderRadius: "12px",
        marginBottom: "1rem",
      }}
    >
      <img
        src={images[current]}
        alt={`slide-${current}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          transition: "all 0.5s ease-in-out",
        }}
      />
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "6px 10px",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        ›
      </button>
    </div>
  );
};

const contacts = [
  {
    icon: <FaInfoCircle />,
    title: "General Inquiries",
    email: "info@airceylonint.com",
  },
  {
    icon: <FaGraduationCap />,
    title: "EPT Academy",
    email: "eptacademy@airceylonint.com",
  },
  {
    icon: <FaUserTie />,
    title: "Business Client",
    email: "alliances@airceylonint.com",
  },
  {
    icon: <BiSupport />,
    title: "Transition Support",
    email: "info@airceylonint.com",
    phone: "+1 437 254 3077",
  },
];

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              Get <span className="gradient-text">Connected.</span>
            </h1>
            <p>
              We're here to assist you with any inquires about our solutions
            </p>
          </div>

          <div className="contact-cards">
            {contacts.map((item, i) => (
              <div className="card-group" key={i}>
                <div className="card-title">
                  {item.icon}
                  <h4>{item.title}</h4>
                </div>
                <ul>
                  <li>
                    <Link to={`tel:${item.phone || "+94760301141"}`}>
                      <IoCall /> {item.phone || "+94 760 301 141"}
                    </Link>
                  </li>
                  <li>
                    <Link to={`mailto:${item.email}`}>
                      <MdEmail /> {item.email}
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>

          <div className="container-sm">
            <h3>Visit us by appointment:</h3>
            <ImageSlider
              images={[
                "/assets/office-desk.jpeg",
                "/assets/office-counter.jpeg",
              ]}
            />

            <a
              href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLocationDot />
              WSPACE - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western
              Province, Sri Lanka.
            </a>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ContactInfo;
