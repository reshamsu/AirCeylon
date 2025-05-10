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
import { MdAddCall } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Container className="container">
        <div className="footer-content">
          <div className="row">
            <div className="brand">
              <div className="footer-brand" style={{ textAlign: "center" }}>
                <Link
                  to="/"
                  className="logo"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--text-gold-brown)",
                  }}
                >
                  <img
                    src="./assets/Logo.png"
                    alt="Air Ceylon Logo"
                    style={{ width: "2.8rem", marginRight: ".8rem" }}
                  />
                  Air Ceylon
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>

                <ul
                  className="socials"
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    margin: "1rem",
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  <li>
                    <a href="https://wa.me/14372543077">
                      <IoLogoWhatsapp />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/your_facebook_username"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/air.ceylon/"
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
                    <a href="mailto:your.email@example.com">
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
                  <a href="#">Middle East</a>
                </li>
                <li>
                  <a href="#">East Asia</a>
                </li>
                <li>
                  <a href="#">South East Asia</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <h3>EPT Academy</h3>
                <li>
                  <a href="#">IELTS</a>
                </li>
                <li>
                  <a href="#">TEFL</a>
                </li>
                <li>
                  <a href="#">ESL</a>
                </li>
                <li>
                  <a href="#">TESOL Coaching</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col">
            <div className="location">
              <p>
                <label>Location:</label> WSPACE - 252A, GALLE ROAD, COLOMBO 4
                (Bambalapitiya), Western Province, Sri Lanka.
                <a
                  href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: ".5rem", textDecoration: "underline" }}
                >
                  View on Google Maps
                </a>
              </p>
            </div>
            <div className="contact">
              <label style={{ display: 'flex', marginRight: "2rem", fontWeight: '500' }}>
                Phone Number: <a href="tel:+14372543077"> +94 123 456 789</a>
              </label>
              |
              <label style={{ display: 'flex', marginLeft: "2rem", fontWeight: '500'}}>
                Email Address:
                <a href="mailto:info@airceylon.com">info@airceylon.com</a>
              </label>
            </div>
          </div>

          <div
            className="rights"
            style={{ textAlign: "center", marginTop: "1.4rem" }}
          >
            <p>
              Air Ceylon <FaRegCopyright /> 2025. All Rights Reserved. Powered
              by <a href="https://www.myhive.biz/">myHive</a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
