import React, { useState } from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const regions = [
  {
    name: "Europe",
    countries: ["Germany", "France", "Italy", "Spain"],
  },
  {
    name: "Asia",
    countries: ["India", "Sri Lanka", "Nepal", "Pakistan"],
  },
  {
    name: "Middle-East",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
  },
  {
    name: "East-Asia",
    countries: ["China", "Japan", "South Korea", "Taiwan"],
  },
  {
    name: "South-East Asia",
    countries: ["Thailand", "Malaysia", "Singapore", "Indonesia"],
  },
];

const SubNavbar = () => {
  const [openRegion, setOpenRegion] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleRegion = (regionName) => {
    setOpenRegion(openRegion === regionName ? null : regionName);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeMenus = () => {
    setOpenRegion(null);
    setMobileOpen(false);
  };

  return (
    <Container>
      {/* Desktop Subnav */}
      <nav className="desktop-subnav">
        <ul className="subnav-list">
          {regions.map((region) => (
            <li
              key={region.name}
              className={`dropdown ${openRegion === region.name ? "open" : ""}`}
            >
              <span
                className="nav-link dropdown-toggle"
                onClick={() => toggleRegion(region.name)}
              >
                {region.name} <IoChevronDownOutline />
              </span>
              {openRegion === region.name && (
                <ul className="dropdown-menu">
                  {region.countries.map((country) => (
                    <li key={country}>
                      <NavLink
                        to="/services/visa-service"
                        className="nav-link"
                        onClick={closeMenus}
                      >
                        {country}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Subnav */}
      <nav className="mobile-subnav">
        <ul className="subnav-list">
          <li className={`dropdown ${mobileOpen ? "open" : ""}`}>
            <span
              className="nav-link dropdown-toggle"
              onClick={toggleMobileMenu}
            >
              Countries <IoChevronDownOutline />
            </span>
            {mobileOpen && (
              <ul className="dropdown-menu mobile-grid">
                {regions.map((region) => (
                  <li key={region.name} className="region-block">
                    <strong className="region-title">{region.name}</strong>
                    <ul className="dropdown-submenu">
                      {region.countries.map((country) => (
                        <li key={country}>
                          <NavLink
                            to="/services/visa-service/countries"
                            className="nav-link"
                            onClick={closeMenus}
                          >
                            {country}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SubNavbar;
