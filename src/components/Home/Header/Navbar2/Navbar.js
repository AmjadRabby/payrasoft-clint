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
          navScroll ? "navbar-container scroll-nav" : "navbar-container"
        }
      >
        {/* <Container> */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="" className="company-logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <FaTimes className="times-icon" />
          ) : (
            <FaBars className="bars-icon" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-items">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-items"
            onMouseEnter={() => onMouseEnter("service")}
            onMouseLeave={() => onMouseLeave("service")}
          >
            <Link
              // to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <FaCaretDown />
            </Link>
            {service && <DropdownMenu />}
          </li>
          <li
            className="nav-items"
            onMouseEnter={() => onMouseEnter("demo")}
            onMouseLeave={() => onMouseLeave("demo")}
          >
            <Link
              // to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Demo <FaCaretDown />
            </Link>
            {demo && <DemoMenu />}
          </li>
          <li
            className="nav-items"
            onMouseEnter={() => onMouseEnter("company")}
            onMouseLeave={() => onMouseLeave("company")}
          >
            <Link
              // to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Company <FaCaretDown />
            </Link>
            {company && <CompanyMenu />}
          </li>

          <li className="nav-items">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li className="nav-items">
            <Link
              to="/contact-us"
              className="nav-links"
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

const Extra = () => {
  return (
    <div style={{ marginTop: "200px" }} className="position-absolute">
      <h1>amjad</h1>
      <div className="row">
        <div className="col-md-4">amjad</div>
        <div className="col-md-4">amjad</div>
        <div className="col-md-4">amjad</div>
      </div>
    </div>
  );
};
