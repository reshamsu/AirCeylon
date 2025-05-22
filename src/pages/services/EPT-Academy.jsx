import { Container } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { BsInboxesFill } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";
import { IoCart } from "react-icons/io5";

const EPTAcademy = () => {
  return (
    <>
      <div className="ept-academy">
        <div className="homepage-overlay">
          <img src="/assets/ielts.jpg" className="homepage darkened" />
        </div>
        <Container className="container">
          <div className="container-fluid">
            <h1>
              EPT Academy
            </h1>
            <p>
              English Proficiency Training <span>(EPT)</span>
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-welcome">
        <Container className="container">
          <div className="container-fluid">
            {/* <label>EPT Academy</label> */}
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              Welcome to Air Ceylon's{" "}
              <span className="gradient-text">EPT Academy</span>
            </h1>
            <p>The key to unlock your path via IELTS starts here. </p>

            <p>
              Achieve your IELTS goals with personalized, 1-to-1 virtual classes
              for Academic and General candidates. Our courses are tailored to
              your target score, offering individual attention, regular mock
              tests, and full access to ebooks, videos, and practice materials.
              Select the course that fits your needs and begin your path to
              success today.
            </p>
          </div>
        </Container>
      </div>
      <div className="ept-monologue">
        <Container className="container">
          <div className="container-fluid">
            <div className="row">
              <img src="/assets/tutor.png" alt="Tutor" />
              <div className="col">
                <h1>
                  <span className="gradient-text">Tasha Vanhoff</span>
                </h1>
                <label>- Certified IELTS Tutor <span>(Brand Partner)</span></label>
              </div>
            </div>

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
      <div className="ept-packages">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              IELTS <span className="gradient-text">Courses</span>
            </h1>
          </div>
          <div className="container-lg">
            <div className="card">
              <div className="card-title">
                <h3>Crash Course</h3>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <GrOverview style={{ fontSize: "24px" }} /> Sessions: 5
                  </li>
                  <li>
                    <PiTargetBold /> Focus: Academic & General
                  </li>
                  <li>
                    <WiTime4 /> Duration: Customizable
                  </li>
                </ul>

                <h4>Modules Covered:</h4>
                <ul>
                  <li>
                    <FaCheck /> Listening
                  </li>
                  <li>
                    <FaCheck /> Reading
                  </li>
                  <li>
                    <FaCheck /> Writing
                  </li>
                  <li>
                    <FaCheck /> Speaking
                  </li>
                </ul>

                <div className="card-description">
                  <h4>Description:</h4>
                  <p>LKR 25,000</p>
                </div>
                <button className="btn btn-dark">
                  <IoCart /> Add to Cart
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <h3>Essential Course</h3>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <GrOverview style={{ fontSize: "24px" }} /> Sessions: 10
                  </li>
                  <li>
                    <PiTargetBold /> Focus: Academic & General
                  </li>
                  <li>
                    <WiTime4 /> Duration: Customizable
                  </li>
                </ul>

                <h4>Modules Covered:</h4>
                <ul>
                  <li>
                    <FaCheck /> Listening
                  </li>
                  <li>
                    <FaCheck /> Reading
                  </li>
                  <li>
                    <FaCheck /> Writing
                  </li>
                  <li>
                    <FaCheck /> Speaking
                  </li>
                </ul>

                <div className="card-description">
                  <h4>Description:</h4>
                  <p>LKR 25,000</p>
                </div>
                <button className="btn btn-dark">
                  <IoCart /> Add to Cart
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-title">
                <h3>Pro Course</h3>
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    <GrOverview style={{ fontSize: "24px" }} /> Sessions: 20
                  </li>
                  <li>
                    <PiTargetBold /> Focus: Academic & General
                  </li>
                  <li>
                    <WiTime4 /> Duration: Customizable
                  </li>
                </ul>

                <h4>Modules Covered:</h4>
                <ul className="list">
                  <li>
                    <FaCheck /> Listening
                  </li>
                  <li>
                    <FaCheck /> Reading
                  </li>
                  <li>
                    <FaCheck /> Writing
                  </li>
                  <li>
                    <FaCheck /> Speaking
                  </li>
                </ul>
                <div className="card-description">
                  <h4>Description:</h4>
                  <p>LKR 25,000</p>
                </div>
                <button className="btn btn-dark">
                  <IoCart /> Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* <div className="added-info">
            <ul>
              <li>
                <FaCheck /> Virtual 1-to-1 Classes
              </li>
              <li>
                <FaCheck /> Target Audience: Academic and General IELTS
                candidates.
              </li>
              <li>
                <FaCheck /> Customization: Courses are designed to help you
                achieve your specific score target.
              </li>
              <li>
                <FaCheck /> Support: Individual attention and one-on-one
                speaking sessions.
              </li>
              <li>
                <FaCheck /> Learning Materials: Access to online resources,
                including ebooks, videos, reading materials, sample writings,
                and practice exercises.
              </li>
              <li>
                <FaCheck /> Progress Monitoring: Periodical mock tests to gauge
                overall score and progress.
              </li>
            </ul>
            <p>
              Each course package is designed to cater to different preparation
              needs, ensuring a comprehensive and effective learning experience.
            </p>
          </div> */}
        </Container>
      </div>

      <div className="ept-tutoring">
        <Container className="container">
          <div className="container-fluid">
            <label>Tutors</label>
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              In-House <span className="gradient-text">Tutors</span>
            </h1>
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
      {/* <div className="ept-pricing">
        <Container className="container">
          <div className="container-fluid">
            <label>IELTS Courses</label>
            <h1>
              Pricing <span className="gradient-text">Plans</span>
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
      </div> */}

      <div className="ept-testimonials">
        <Container className="container">
          <div className="container-fluid">
            <label>Testimonials</label>
            <h1>
              What Our <span className="gradient-text">Students Say</span>
            </h1>
          </div>
          <div className="container-lg">
            <div className="card">
              <label>Label here...</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  I had a good experience with the IELTS classes I attended. The
                  instructor, Tasha was incredibly knowledgeable and provided
                  tailored guidance that helped me understand the exam structure
                  and improve my skills in all areas, including reading,
                  writing, listening, and speaking. Her engaging individual
                  teaching methods kept my classes interesting and motivating.
                  With her support, I felt confident and well-prepared on test
                  day. I passed! I highly recommend these classes to anyone
                  looking to achieve a high score on the IELTS!
                  <FaQuoteRight />
                </h4>
                <p className="card-text">IELTS Student</p>
              </div>
            </div>

            <div className="card">
              <label>Label here...</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  Miss Tasha was very helpful, gained alot of tips and she
                  recommended really good resources to practice ielts, helped me
                  gain a scope of the whole test in a short period of time, very
                  satisfied with her work and would definitely recommend.
                  <FaQuoteRight />
                </h4>
                <p className="card-text">IELTS Student</p>
              </div>
            </div>

            <div className="card">
              <label>Label here...</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />I wanted a band score of 6.5 for the IELTS, and
                  my English was very weak. Within a very short time, Tasha
                  helped me improve my English skills more than I expected.
                  Highly recommended! <FaQuoteRight />
                </h4>
                <p className="card-text">IELTS Student</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default EPTAcademy;
