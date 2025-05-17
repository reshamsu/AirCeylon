import { Container } from "@mui/material";
import React from "react";
import { FiSend } from "react-icons/fi";

const Contact = () => {
  return (
    <>
      <div className="contact-section1">
        <div className="homepage-overlay">
          <img
            src="./assets/Watermark.png"
            className="watermark"
            alt="Watermark"
          />
        </div>

        <Container className="container">
          <div className="container-fluid">
            <label>Reach Out</label>
            <h1>
              Contact <span>Us</span>
            </h1>
            <h5>Visit us by appointment:</h5>
            <p>
              Wspace - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western
              Province, Sri Lanka.
            </p>
            {/* <p>
            <Link>info@airceylonint.com</Link>
          </p>
          <p>
            <Link>94 12 345 6789</Link>
          </p> */}
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h1>
                  Get <span>Connected.</span>
                </h1>
              </div>
              <div className="card-text">
                <p>
                  We're here to assist you with any inquires about our solutions
                </p>
              </div>
            </div>
            <form>
              <div className="col">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Your Phone Number"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label>Preferred Support System</label>
                  <select className="form-control">
                    <option>Call for Inquries</option>
                    <option>Book an Appointment</option>
                    <option>Register for a Course</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional Info</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Your Message here..."
                  />
                </div>
              </div>
            </form>
            <button className="btn btn-primary">
              Submit Message <FiSend />{" "}
            </button>
          </div>
        </Container>
      </div>

      <div className="contact-section2">
        <Container className="container">
          <div className="container-fluid">
            <label>FAQ</label>
            <h1>
              FA<span>Q</span>
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
              Cras aliquam purus urna.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
