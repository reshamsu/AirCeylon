import { Container } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { PiTargetBold } from "react-icons/pi";
import { WiTime4 } from "react-icons/wi";
import { BsInboxesFill } from "react-icons/bs";
import { GrOverview } from "react-icons/gr";

const EPTAcademy = () => {
  return (
    <>
      <div className="ept-academy">
        <Container className="container">
          <div className="container-fluid">
            <h1>
              EPT <span className="gradient-text">Academy</span>
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
              Welcome to <span className="gradient-text">EPT Academy</span>
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
              Message from{" "}
              <span className="gradient-text">EPT Academy Tutor</span>
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
      <div className="ept-packages">
        <Container className="container">
          <div className="container-fluid">
            <label>Packages</label>
            {/* <img src="./assets/Logo.png" alt="Air Ceylon Logo" /> */}
            <h1>
              Academy <span className="gradient-text">Packages</span>
            </h1>
            {/* <h4 className="card-title">
                    At Air Ceylon, your journey is our passion. - see what our
                    guests have to say.
                  </h4> */}
          </div>
          <div className="container-lg">
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>5-Day Crash Course (5 Sessions)</h3>
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      <PiTargetBold /> Focus: Academic & General
                    </li>
                    <li>
                      <WiTime4 /> Duration: 5 Sessions
                    </li>
                    <li>
                       <BsInboxesFill style={{ marginLeft: ".2rem"}}/> Modules Covered: Listening, Reading, Writing,
                      Speaking
                    </li>
                    <li>
                      <GrOverview style={{ fontSize: "24px"}}/> Overview: Pending Info.
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>10-Day Essential Course (10 Sessions)</h3>
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      <PiTargetBold /> Focus: Academic & General
                    </li>
                    <li>
                      <WiTime4 /> Duration: 10 Sessions
                    </li>
                    <li>
                      <BsInboxesFill style={{ marginLeft: ".2rem"}}/> Modules Covered: Listening, Reading, Writing,
                      Speaking
                    </li>
                    <li>
                      <GrOverview style={{ fontSize: "24px"}}/> Overview: Pending Info.
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="card-title">
                  <h3>20-Day Pro Course (20 Sessions)</h3>
                </div>
                <div className="card-text">
                  <ul>
                    <li>
                      <PiTargetBold /> Focus: Academic & General
                    </li>
                    <li>
                      <WiTime4 /> Duration: 20 Sessions
                    </li>
                    <li>
                       <BsInboxesFill style={{ marginLeft: ".2rem"}}/> Modules Covered: Listening, Reading, Writing,
                      Speaking
                    </li>
                    <li>
                      <GrOverview style={{ fontSize: "24px"}}/> Overview: Pending Info.
                    </li>
                  </ul>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="added-info">
            <ul>
              <li><FaCheck /> Virtual 1-to-1 Classes</li>
              <li><FaCheck /> Target Audience: Academic and General IELTS candidates.</li>
              <li>
                <FaCheck /> Customization: Courses are designed to help you achieve your
                specific score target.
              </li>
              <li>
                <FaCheck /> Support: Individual attention and one-on-one speaking sessions.
              </li>
              <li>
                <FaCheck /> Learning Materials: Access to online resources, including
                ebooks, videos, reading materials, sample writings, and practice
                exercises.
              </li>
              <li>
                <FaCheck /> Progress Monitoring: Periodical mock tests to gauge overall
                score and progress.
              </li>
            </ul>
            <p>
              Each course package is designed to cater to different preparation
              needs, ensuring a comprehensive and effective learning experience.
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
              In-House <span className="gradient-text">Tutors</span>
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
      </div>

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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  rutrum vel tortor at tempor. Quisque tincidunt leo suscipit
                  tellus lacinia placerat. Quisque eleifend turpis turpis, quis
                  suscipit nisl fringilla id. In accumsan quam nec nisi
                  faucibus, sed feugiat odio pulvinar. Nam est nisi, auctor ac
                  hendrerit iaculis, feugiat nec justo.
                  <FaQuoteRight />
                </h4>
                <p className="card-text">Hive Colombo</p>
              </div>
            </div>

            <div className="card">
              <label>Label here...</label>
              <div className="card-body">
                <h4 className="card-title">
                  <FaQuoteLeft />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  rutrum vel tortor at tempor. Quisque tincidunt leo suscipit
                  tellus lacinia placerat. Quisque eleifend turpis turpis, quis
                  suscipit nisl fringilla id. In accumsan quam nec nisi
                  faucibus, sed feugiat odio pulvinar. Nam est nisi, auctor ac
                  hendrerit iaculis, feugiat nec justo.
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  rutrum vel tortor at tempor. Quisque tincidunt leo suscipit
                  tellus lacinia placerat. Quisque eleifend turpis turpis, quis
                  suscipit nisl fringilla id. In accumsan quam nec nisi
                  faucibus, sed feugiat odio pulvinar. Nam est nisi, auctor ac
                  hendrerit iaculis, feugiat nec justo. <FaQuoteRight />
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
