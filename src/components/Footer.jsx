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
                <a
                  href="/"
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "var(--text-gold-hover)",
                  }}
                >
                  Air Ceylon
                  {/* <img src="" alt="logo" className="logo" /> */}
                </a>
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
                <h6>Services</h6>
                <li>
                  <a href="#">Visa Service</a>
                </li>
                <li>
                  <a href="#">EPT Academy</a>
                </li>
                <li>
                  <a href="#">Transition Support</a>
                </li>
                <li>
                  <a href="#">Notarization</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <ul>
                <h6>Visa Service</h6>
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
              <div className="location">
                <h6>Location & Contact</h6>
                <p>
                  WSPACE - 252A, GALLE ROAD, COLOMBO 4 (Bambalapitiya), Western
                  Province, Sri Lanka
                </p>
                <a
                  href="https://www.google.com/maps?q=WSPACE+-+252A,+GALLE+ROAD,+COLOMBO+4+(Bambalapitiya),+Western+Province,+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>
              <div className="contact">
                <a href="tel:+14372543077">+94 123 456 789 (Call)</a>
                <a href="mailto:info@airceylon.com">
                  info@airceylon.com (Email)
                </a>
              </div>
            </div>
          </div>

          <div
            className="rights"
            style={{ textAlign: "center", marginTop: "1rem" }}
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
