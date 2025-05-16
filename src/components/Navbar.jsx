import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoChevronDownOutline, IoBagCheckOutline } from "react-icons/io5";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith("/services");
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <>
      <header>
        <nav className="navbar">
          <NavLink
            to="/"
            className="logo"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src="/assets/Logo.png"
              alt="Air Ceylon Logo"
              style={{ width: "2.8rem", marginRight: ".8rem" }}
            />
            Air Ceylon
          </NavLink>

          {/* Desktop Nav */}
          <ul className="nav-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li
              className={`service-dropdown ${isServicesRoute ? "nav-link-active" : ""}`}
            >
              <span className="nav-link dropdown-toggle">
                Services <IoChevronDownOutline />
              </span>
              <ul className="service-dropdown-menu">
                <li>
                  <NavLink
                    to="/services/visa-service"
                    className="dropdown-item"
                  >
                    Visa Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/services/ept-academy" className="dropdown-item">
                    EPT Academy
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/transition-support"
                    className="dropdown-item"
                  >
                    Transition Support
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services/notarization"
                    className="dropdown-item"
                  >
                    Notarization
                  </NavLink>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? "nav-link nav-link-active" : "nav-link"
                }
              >
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  isActive ? "nav-link-icon nav-icon-active" : "nav-link-icon"
                }
              >
                <IoBagCheckOutline />
              </NavLink>
            </li>
          </ul>

          <button className="menu" onClick={() => setMenuOpen(true)}>
            <HiMenuAlt3 />
          </button>
        </nav>
      </header>

      {/* Mobile Side Navigation */}
      {menuOpen && (
        <nav className="sidenav">
          <ul className="sidenav-menu-list">
            <div className="title">
              <button
                className="close-sidebar"
                onClick={() => setMenuOpen(false)}
              >
                <FaChevronRight />
              </button>
              <h3>Menu</h3>
            </div>

            <li>
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                Home
              </NavLink>
            </li>

            {/* Mobile Services Dropdown */}
            <li
              className={`dropdown ${isServicesRoute ? "nav-link-active" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services <IoChevronDownOutline />
              </span>
              {mobileServicesOpen && (
                <ul className="sidenav-submenu">
                  <li>
                    <NavLink
                      to="/services/visa-service"
                      onClick={() => setMenuOpen(false)}
                    >
                      Visa Service
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/ept-academy"
                      onClick={() => setMenuOpen(false)}
                    >
                      EPT Academy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/transition-support"
                      onClick={() => setMenuOpen(false)}
                    >
                      Transition Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services/notarization"
                      onClick={() => setMenuOpen(false)}
                    >
                      Notarization
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink to="/contact-us" onClick={() => setMenuOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" onClick={() => setMenuOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                Blogs
              </NavLink>
            </li>
          </ul>
          <span>
            <NavLink to="/checkout" onClick={() => setMenuOpen(false)}>
              Checkout
            </NavLink>
            <IoBagCheckOutline />
          </span>
        </nav>
      )}
    </>
  );
};

export default Navbar;
