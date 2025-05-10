// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { IoChevronDownOutline, IoBagCheckOutline } from "react-icons/io5";
// import { HiMenuAlt3 } from "react-icons/hi";

// const MobileNav = () => {
//   return (
//     <header>
//       <nav className="mobnav">
//         {/* <NavLink
//           to="/"
//           className="logo"
//           style={{ display: "flex", alignItems: "center" }}
//         >
//           <img
//             src="./assets/Logo.png"
//             alt="Air Ceylon Logo"
//             style={{ width: "2.8rem", marginRight: ".8rem" }}
//           />
//           Air Ceylon
//         </NavLink> */}

//         <ul className="nav-links">
//           <li>
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 isActive ? "nav-link nav-link-active" : "nav-link"
//               }
//             >
//               Home
//             </NavLink>
//           </li>

//           <li
//             className={`dropdown ${isServicesRoute ? "nav-link-active" : ""}`}
//           >
//             <span className="nav-link dropdown-toggle">
//               Services <IoChevronDownOutline />
//             </span>
//             <ul className="dropdown-menu">
//               <li>
//                 <NavLink to="/services/visa-service" className="dropdown-item">
//                   Visa Service
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/services/ept-academy" className="dropdown-item">
//                   EPT Academy
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/services/transition-support"
//                   className="dropdown-item"
//                 >
//                   Transition Support
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to="/services/notarization" className="dropdown-item">
//                   Notarization
//                 </NavLink>
//               </li>
//             </ul>
//           </li>

//           <li>
//             <NavLink
//               to="/contact-us"
//               className={({ isActive }) =>
//                 isActive ? "nav-link nav-link-active" : "nav-link"
//               }
//             >
//               Contact
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/about-us"
//               className={({ isActive }) =>
//                 isActive ? "nav-link nav-link-active" : "nav-link"
//               }
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 isActive ? "nav-link nav-link-active" : "nav-link"
//               }
//             >
//               Blogs
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to="/checkout"
//               className={({ isActive }) =>
//                 isActive ? "nav-link-icon nav-link-active" : "nav-link-icon"
//               }
//             >
//               <IoBagCheckOutline style={{ padding: "8px" }} />
//             </NavLink>
//           </li>
//         </ul>
//         <HiMenuAlt3 />
//       </nav>
//     </header>
//   );
// };

// export default MobileNav;
