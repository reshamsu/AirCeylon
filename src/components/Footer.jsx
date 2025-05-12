import React from "react";
import { Container } from "@mui/material";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RxDividerVertical } from "react-icons/rx";

const Footer = () => {
  return (
    <footer>
      <Container className="container">
        <div className="footer-content">
          <div className="row">
            <div className="brand">
              <div className="footer-brand" style={{ textAlign: "center" }}>
                <Link to="/" className="logo">
                  <img
                    src="./assets/Logo.png"
                    alt="Air Ceylon Logo"
                    style={{ width: "2.8rem", marginRight: ".8rem" }}
                  />
                  AIR CEYLON
                </Link>
                <p>Beyond the Horizon.</p>

                <ul>
                  <li>
                    <a href="https://wa.me/14372543077">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/share/19h7Uyr39x/?mibextid=wwXIfr "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/air.ceylon?igsh=MXFiaTdhZ3picmM2dg== "
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/air-ceylon/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@airceylonint.com">
                      <HiOutlineMail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col">
              <ul>
                <h3>Services</h3>
                <li>
                  <a href="/services/visa-service">Visa Service</a>
                </li>
                <li>
                  <a href="/services/ept-academy">EPT Academy</a>
                </li>
                <li>
                  <a href="/services/transition-support">Transition Support</a>
                </li>
                {/* <li>
                  <a href="/services/travels-tours">Travels & Tours</a>
                </li>
                <li>
                  <a href="/services/ticketing">Ticketing</a>
                </li> */}
                <li>
                  <a href="/services/notarization">Notarization</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <h3>Visa Service</h3>
                <li>
                  <a href="#">Europe</a>
                </li>
                <li>
                  <a href="#">Asia</a>
                </li>
                <li>
                  <a href="#">Middle-East</a>
                </li>
                <li>
                  <a href="#">East Asia</a>
                </li>
                <li>
                  <a href="#">South-East Asia</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <h3>EPT Academy</h3>
                <li>
                  <a href="#">Crash Course</a>
                </li>
                <li>
                  <a href="#">Essential Course</a>
                </li>
                <li>
                  <a href="#">Pro Course</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="location">
              <p>
                <label>Visit us by Appointment:</label> Wspace - 252A, Galle Road, Colombo 4
                (Bambalapitiya), Western Province, Sri Lanka.
                <a
                  href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
            <div className="contact">
              <label>
                Phone Number: <a href="tel:+14372543077"> +94 760 301 141</a>
              </label>
              <RxDividerVertical />
              <label>
                Email Address:
                <a href="mailto:info@airceylon.com">info@airceylonint.com</a>
              </label>
            </div>
          </div>

          <div
            className="rights"
            style={{ textAlign: "center", marginTop: "1.4rem" }}
          >
            <p>
              Air Ceylon International Private Limited <FaRegCopyright /> 2025. All Rights Reserved. Powered
              by <a href="https://www.myhive.biz/">myhive</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
