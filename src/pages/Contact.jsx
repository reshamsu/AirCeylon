import { Container } from "@mui/material";
import React from "react";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdAddIcCall } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LuCalendarFold } from "react-icons/lu";

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
            <label>Connect</label>
            <h1>
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p>
             <Link><MdAddIcCall />By Phone: +94 760 301 141</Link>
            </p>
            <p>
              <Link><HiOutlineMailOpen />By Email: info@airceylonint.com</Link>
            </p>
            <h5><LuCalendarFold /> Visit us by appointment - Wspace - 252A, Galle Road, Colombo 4 (Bambalapitiya), Western
              Province, Sri Lanka.</h5>
          </div>
          <div className="card">
            <div className="card-body">
              <div className="card-title">
                <h1>
                  Get <span className="gradient-text">Connected.</span>
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
              FA<span className="gradient-text">Q</span>
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
