import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars, FaCaretDown, FaSearch } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import Button from "./Button";
import { Container } from "react-bootstrap";
import DemoMenu from "./DemoMenu";
import CompanyMenu from "./CompanyMenu";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [service, setService] = useState(false);
  const [demo, setDemo] = useState(false);
  const [company, setCompany] = useState(false);

  const [navScroll, setNavScroll] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (item) => {
    if (window.innerWidth < 960) {
      setService(false);
      setDemo(false);
      setCompany(false);
    } else {
      if (item === "service") {
        setService(true);
      }
      if (item === "demo") {
        setDemo(true);
      }
      if (item === "company") {
        setCompany(true);
      }
    }
  };
  const onMouseLeave = (item) => {
    if (window.innerWidth < 960) {
      setService(false);
    } else {
      if (item === "service") {
        setService(false);
      }
      if (item === "demo") {
        setDemo(false);
      }
      if (item === "company") {
        setCompany(false);
      }
    }
  };

  const handleNavScroll = () => {
    if (window.scrollY >= 100) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };
  window.addEventListener("scroll", handleNavScroll);
  return (
    <>
      <nav
        className={
          navScroll ? "navbar-container scroll-nav shadow" : "navbar-container"
        }
      >
        {/* <Container> */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="company-logo img-fluid" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes
              className={
                navScroll ? "times-icon scroll-color-icon" : "times-icon"
              }
            />
          ) : (
            <FaBars
              className={
                navScroll ? "bars-icon scroll-color-icon" : "bars-icon"
              }
            />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items nav-bottom-border">
            <Link
              to="/"
              className={
                navScroll
                  ? "nav-links scroll-color scroll-bg-color"
                  : "nav-links"
              }
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li
            className="nav-items nav-bottom-border"
            onMouseEnter={() => onMouseEnter("service")}
            onMouseLeave={() => onMouseLeave("service")}
          >
            <Link
              // to="/services"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Services <FaCaretDown />
            </Link>
            {service && <DropdownMenu />}
          </li>
          <li
            className="nav-items nav-bottom-border"
            onMouseEnter={() => onMouseEnter("demo")}
            onMouseLeave={() => onMouseLeave("demo")}
          >
            <Link
              // to="/services"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Demo <FaCaretDown />
            </Link>
            {demo && <DemoMenu />}
          </li>
          <li
            className="nav-items nav-bottom-border"
            onMouseEnter={() => onMouseEnter("company")}
            onMouseLeave={() => onMouseLeave("company")}
          >
            <Link
              // to="/services"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Company <FaCaretDown />
            </Link>
            {company && <CompanyMenu />}
          </li>

          <li className="nav-items nav-bottom-border">
            <Link
              to="/contact-us"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-items nav-bottom-border">
            <Link
              to="/contact-us"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-items ml-2 mr-3">
            <Link
              to="/contact-us"
              className={navScroll ? "nav-links scroll-color" : "nav-links"}
              onClick={closeMobileMenu}
            >
              <FaSearch />
            </Link>
          </li>
          {/* <li className="nav-items">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li> */}
          <li className="nav-items">
            <Link
              to="/login"
              className="mr-3 btn brand-color-bg"
              variant=" font-weight-bold"
            >
              Sign In
            </Link>
          </li>
        </ul>
        {/* <Link
          to="/login"
          className="mr-3 btn brand-color-bg"
          variant=" font-weight-bold"
        >
          Sign In
        </Link> */}
        {/* <Button></Button> */}
        {/* </Container> */}
      </nav>
    </>
  );
};

export default Navbar;
