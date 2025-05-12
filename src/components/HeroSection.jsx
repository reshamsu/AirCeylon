import React from "react";
import { Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Hero Carousel */}
      <div className="homepage-overlay">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          interval={7000}
          transitionTime={1200}
          emulateTouch
          stopOnHover={false}
          swipeable={true}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow left"
              >
                <FaChevronLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="custom-arrow right"
              >
                <FaChevronRight />
              </button>
            )
          }
        >
          <div>
            <img src="./assets/homepage1.jpg" alt="Slide 1" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage2.jpg" alt="Slide 2" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage3.jpg" alt="Slide 3" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage4.jpg" alt="Slide 4" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage5.jpg" alt="Slide 5" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage6.jpg" alt="Slide 6" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage7.jpg" alt="Slide 7" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage8.jpg" alt="Slide 8" className="homepage darkened" />
          </div>
          <div>
            <img src="./assets/homepage9.jpg" alt="Slide 9" className="homepage darkened" />
          </div>
        </Carousel>

        <img src="./assets/Logo2.png" className="watermark" alt="Watermark" />
      </div>

      <Container className="airceylon">
        <div className="container-fluid">
          <h1>
            Discover <span>Your World</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            varius ipsum. Aenean ex.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
