import React, { useState } from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { IoChevronDownOutline } from "react-icons/io5";

const regions = [
  {
    name: "Europe",
    path: "europe",
    countries: ["Germany", "France", "Italy", "Spain"],
  },
  {
    name: "Asia",
    path: "asia",
    countries: ["India", "Sri Lanka", "Nepal", "Pakistan"],
  },
  {
    name: "Middle-East",
    path: "middle-east",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Oman"],
  },
  {
    name: "East-Asia",
    path: "east-asia",
    countries: ["China", "Japan", "South Korea", "Taiwan"],
  },
  {
    name: "South-East Asia",
    path: "south-east-asia",
    countries: ["Thailand", "Malaysia", "Singapore", "Indonesia"],
  },
];

const SubNavbar = () => {
  const [openRegion, setOpenRegion] = useState(null);

  const toggleRegion = (regionName) => {
    setOpenRegion(openRegion === regionName ? null : regionName);
  };

  const closeMenus = () => {
    setOpenRegion(null);
  };

  return (
    <Container>
      <nav className="subnav">
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
                        to={`/services/visa-service/${region.path}/${country
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
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
    </Container>
  );
};

export default SubNavbar;
