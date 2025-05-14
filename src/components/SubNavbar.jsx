import React from "react";
import { Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const SubNavbar = () => {
  return (
    <Container>
      <nav className="subnav">
        <ul>
          <li>
            <NavLink
              to="/services/visa-service/europe"
              className={({ isActive }) =>
                isActive
                  ? "nav-link-underline nav-link-underline-active"
                  : "nav-link-underline"
              }
            >
              Europe
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/visa-service/asia"
              className={({ isActive }) =>
                isActive
                  ? "nav-link-underline nav-link-underline-active"
                  : "nav-link-underline"
              }
            >
              Asia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/visa-service/middle-east"
              className={({ isActive }) =>
                isActive
                  ? "nav-link-underline nav-link-underline-active"
                  : "nav-link-underline"
              }
            >
              Middle-East
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/visa-service/east-asia"
              className={({ isActive }) =>
                isActive
                  ? "nav-link-underline nav-link-underline-active"
                  : "nav-link-underline"
              }
            >
              East-Asia
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services/visa-service/south-east-asia"
              className={({ isActive }) =>
                isActive
                  ? "nav-link-underline nav-link-underline-active"
                  : "nav-link-underline"
              }
            >
              South-East Asia
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default SubNavbar;
