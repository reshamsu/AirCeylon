import { Container } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

const EPTAcademy = () => {
  return (
    <>
      <div className="ept-academy">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              EPT <span>Academy</span>
            </h1>
            <p>
              Info EPT <span>Academy</span>
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-welcome">
        <Container className="container">
          <div className="container-fluid">
            <label>EPT Academy</label>
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              Welcome to <span>EPT Academy</span>
            </h1>
            {/* <h4 className="card-title">
                    At Air Ceylon, your journey is our passion. - see what our
                    guests have to say.
                  </h4> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.every scroll guide you to the destination
              of your dreams.
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-monologue">
        <Container className="container">
          <div className="container-fluid">
            <label>Monologue</label>
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              Message from <span>EPT Academy Tutor</span>
            </h1>
            {/* <h4 className="card-title">
                    At Air Ceylon, your journey is our passion. - see what our
                    guests have to say.
                  </h4> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.every scroll guide you to the destination
              of your dreams.
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-tutoring">
        <Container className="container">
          <div className="container-fluid">
            <label>Tutors</label>
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              In-House <span>Tutors</span>
            </h1>
            {/* <h4 className="card-title">
                    At Air Ceylon, your journey is our passion. - see what our
                    guests have to say.
                  </h4> */}
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              rutrum vel tortor at tempor. Quisque tincidunt leo suscipit tellus
              lacinia placerat. Quisque eleifend turpis turpis, quis suscipit
              nisl fringilla id. In accumsan quam nec nisi faucibus, sed feugiat
              odio pulvinar. Nam est nisi, auctor ac hendrerit iaculis, feugiat
              nec justo. Vestibulum gravida, leo eu sollicitudin fringilla, nibh
              turpis maximus orci, porttitor sollicitudin magna nisl id metus.
              Mauris vitae nulla in tellus dignissim dapibus ornare quis enim.
              Cras aliquam purus urna.every scroll guide you to the destination
              of your dreams.
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-pricing">
        <Container className="container">
          <div className="container-fluid">
            <label>Pricing</label>
            <h1>
              Pricing <span>Plans</span>
            </h1>
          </div>

          <div className="container-lg">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Basic Plan</h3>
                <div className="card-text">
                  <h1>$100</h1>
                  <ul>
                    <li>
                      <FaCheck /> Freelancers
                    </li>
                    <li>
                      <FaCheck /> Startups
                    </li>
                  </ul>
                </div>
                <button className="btn btn-light">Get Started</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Standard Plan</h3>
                <div className="card-text">
                  <h1>$500</h1>
                  <ul>
                    <li>
                      <FaCheck /> Freelancers
                    </li>
                    <li>
                      <FaCheck /> Startups
                    </li>
                    <li>
                      <FaCheck /> Small Scale Businesses
                    </li>
                  </ul>
                </div>
                <button className="btn btn-light">Get Started</button>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Premium Plan</h3>
                <div className="card-text">
                  <h1>$1000</h1>
                  <ul>
                    <li>
                      <FaCheck /> Startups
                    </li>
                    <li>
                      <FaCheck /> Small Scale Businesses
                    </li>
                    <li>
                      <FaCheck /> Medium Scale Businesses
                    </li>
                  </ul>
                </div>
                <button className="btn btn-light">Get Started</button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="ept-testimonials">
        <Container className="container">
          <div className="container-fluid">
            <label>Testimonials</label>
            <h1>
              What Our <span>Students Say</span>
            </h1>
          </div>
          <div className="container-lg">
            <div className="card">
              <label>Business Client</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  At Hive Colombo, we navigate through any travel related
                  activities seamlessly and confidently via Air Ceylon. Their
                  expertise, partnerships and commitment is unique but more
                  importantly a reliable & valuable travel solution.
                  <FaQuoteRight />
                </h4>
                <p className="card-text">Hive Colombo</p>
              </div>
            </div>

            <div className="card">
              <label>EPT Academy</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  As a frequent traveler, I value efficiency, reliability, and
                  local insight. Air Ceylon not only helped me navigate multiple
                  destinations across Asia and Europe, but also offered curated
                  itineraries that exceeded expectations. A truly trusted travel
                  partner.
                  <FaQuoteRight />
                </h4>
                <p className="card-text">IELTS Student</p>
              </div>
            </div>

            <div className="card">
              <label>Transition Support</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  The level of personalized service Air Ceylon provides is
                  unparalleled. Their attention to detail, swift communication,
                  and thoughtful recommendations made my corporate retreat both
                  productive and enjoyable. Highly recommended for premium
                  travel needs. <FaQuoteRight />
                </h4>
                <p className="card-text">Resident from Toronto - Canada.</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EPTAcademy;
