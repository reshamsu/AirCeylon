import React from "react";
import { Container } from "@mui/material";
import { FiSend } from "react-icons/fi";

const VisaContact = () => {
  return (
    <div className="visa-contact">
      <Container className="container">
        <div className="container-fluid">
          <h1>
            VISA <span className="gradient-text">Application Form.</span>
          </h1>
          <p>We're here to assist you with any inquires about our solutions</p>
        </div>

        <div className="card">
          {/* <div className="card-body">
            <h2>
              Contact <span>VISA Service</span>
            </h2>
            <p>
              We're here to assist you with any inquires about our solutions
            </p>
            <div className="card-group">
              <IoCall />
              <ul>
                <li>
                  <a href="tel:+94760301141">+94 760 301 141</a> (General)
                </li>
                <li>
                  <a href="tel:+14372543077">+1 437 254 3077</a> - Transition
                  Support (Toronto - Canada)
                </li>
              </ul>
            </div>
            <div className="card-group">
              <MdEmail />
              <ul>
                <li>
                  <a href="mailto:info@airceylonint.com">
                    info@airceylonint.com
                  </a>{" "}
                  (General)
                </li>
                <li>
                  <a href="mailto:eptacademy@airceylonint.com">
                    eptacademy@airceylonint.com
                  </a>{" "}
                  (EPT Academy)
                </li>
                <li>
                  <a href="mailto:alliances@airceylonint.com">
                    alliances@airceylonint.com
                  </a>{" "}
                  (Business Client)
                </li>
              </ul>
            </div>
            <div className="card-text">
              <h4>Visit us by appointment:</h4>
              <div className="card-group">
                <FaLocationDot />
                <ul>
                  <li>
                    Wspace - 252A, Galle Road, Colombo 4 (Bambalapitiya),
                    Western Province, Sri Lanka.
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <div className="card-form">
            <div className="card-text">
              <h2>
                VISA <span>Service Form</span>
              </h2>
              <p>
                We're here to assist you with any inquires about our solutions
              </p>
            </div>

            <form>
              <div className="row">
                <div className="form-group">
                  <label>First Name (Passport)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name (Passport)</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
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
              <div className="row">
                <div className="form-group">
                  <label>Choose Country</label>
                  <select className="form-control">
                    <option>Select a Country</option>
                    <option>Azerbaijan</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Belarus</option>
                    <option>China</option>
                    <option>Egypt</option>
                    <option>Georgia</option>
                    <option>India</option>
                    <option>Indonesia</option>
                    <option>Japan</option>
                    <option>Jordan</option>
                    <option>Kuwait</option>
                    <option>Lebanon</option>
                    <option>Maldives</option>
                    <option>Malaysia</option>
                    <option>Mauritius</option>
                    <option>Morocco</option>
                    <option>Nepal</option>
                    <option>Oman</option>
                    <option>Pakistan</option>
                    <option>Philippines</option>
                    <option>Qatar</option>
                    <option>Saudi Arabia</option>
                    <option>Singapore</option>
                    <option>Thailand</option>
                    <option>Tunisia</option>
                    <option>Turkey</option>
                    <option>UAE</option>
                    <option>Uzbekistan</option>
                    <option>Vietnam</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">No. of Adults</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Select</option>
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                    <option>4 Adults</option>
                    <option>5 Adults</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="exampleFormControlSelect1">No. of Children</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>Select</option>
                    <option>1 Children</option>
                    <option>2 Children</option>
                    <option>3 Children</option>
                    <option>4 Children</option>
                    <option>5 Children</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="form-group">
                  <label>Additional Info</label>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="Message here..."
                  />
                </div>
              </div>
              <button className="btn btn-primary">
                Submit Now 
                {/* <FiSend /> */}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default VisaContact;
