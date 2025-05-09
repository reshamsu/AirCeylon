import React from "react";
import { Link } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";
import { IoBagCheckOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center'}}>
          <img src="./assets/Logo.png" alt="Air Ceylon Logo" style={{ width: '2.8rem', marginRight: '1rem'}}/>
          Air Ceylon
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="dropdown">
            <span className="nav-link dropdown-toggle">
              Services <IoChevronDownOutline />
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link to="/services/visa-service" className="dropdown-item">
                  Visa Service
                </Link>
              </li>
              <li>
                <Link to="/services/ept-academy" className="dropdown-item">
                  EPT Academy
                </Link>
              </li>
              <li>
                <Link
                  to="/services/transition-support"
                  className="dropdown-item"
                >
                  Transition Support
                </Link>
              </li>
              <li>
                <Link to="/services/travels-tours" className="dropdown-item">
                  Travels & Tours
                </Link>
              </li>
              <li>
                <Link to="/services/ticketing" className="dropdown-item">
                  Ticketing
                </Link>
              </li>
              <li>
                <Link to="/services/notarization" className="dropdown-item">
                  Notarization
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/contact-us" className="nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/about-us" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="nav-link">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/checkout" className="nav-link-icon">
              <IoBagCheckOutline style={{ padding: "8px" }} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
