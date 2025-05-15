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

  const toggleDropdown = (region) => {
    setOpenRegion(openRegion === region ? null : region);
  };

  return (
    <Container>
      <nav className="subnav">
        <ul className="subnav-list">
          {regions.map((region) => (
            <li key={region.name} className="subnav-item">
              <div
                className="subnav-region"
                onClick={() => toggleDropdown(region.name)}
                style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              >
                <NavLink
                  to={`/services/visa-service/${region.path}`}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link-underline nav-link-underline-active"
                      : "nav-link-underline"
                  }
                  style={{ marginRight: "0.5rem" }}
                >
                  {region.name}
                </NavLink>
                <IoChevronDownOutline />
              </div>
              {openRegion === region.name && (
                <ul className="subnav-region-dropdown">
                  {region.countries.map((country) => (
                    <li key={country}>
                      <NavLink
                        to={`/services/visa-service/${region.path}/${country.toLowerCase().replace(/\s+/g, "-")}`}
                        className="nav-link-underline"
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
