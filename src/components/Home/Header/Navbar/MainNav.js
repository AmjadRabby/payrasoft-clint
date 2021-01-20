import React from "react";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className="bg-transparent main_navbar pb-5 justify-content-center"
    >
      <Container className="p-0 ">
        <Navbar.Brand href="#home">
          <Link to="/">
            <img className="img-fluid logo" src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className="navbar-item" href="#home">
              Home
            </Nav.Link>

            <li className="nav-item dropdown">
              {" "}
              <Link
                className="nav-link navbar-item dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Service
              </Link>{" "}
              <ul className="dropdown-menu shadow border-0">
                {" "}
                <li>
                  <Link className="dropdown-item" href="#">
                    Web Development
                  </Link>
                </li>{" "}
                <li>
                  <Link className="dropdown-item" href="#">
                    Software Development
                  </Link>
                </li>{" "}
                <li>
                  <Link className="dropdown-item" href="#">
                    WordPress Development
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Virtual Assistant
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Re-design Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Digital Marketing
                  </Link>
                </li>
              </ul>{" "}
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link  navbar-item dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Demo
              </Link>
              <ul className="dropdown-menu shadow border-0">
                <li>
                  <Link className="dropdown-item" href="#">
                    Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Software
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Apps
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Wordpress Website
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Products
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link navbar-item dropdown-toggle"
                href="#"
                data-toggle="dropdown"
              >
                Company
              </Link>
              <ul className="dropdown-menu shadow border-0">
                <li>
                  <Link className="dropdown-item" href="#">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Company Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Why Choose Us
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Payment System
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Trust and Safety
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    Help & Support
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Testimonials{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Privacy policy{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Sitemap{" "}
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="#">
                    {" "}
                    Job{" "}
                  </Link>
                </li>
              </ul>
            </li>
            <Nav.Link className="navbar-item" href="#link">
              {" "}
              Blog
            </Nav.Link>
            <Nav.Link className="navbar-item" href="#">
              Contact
            </Nav.Link>
          </Nav>
          <Nav className=" d-flex align-items-center">
            <Nav.Link href="#link" className="p-0">
              <FaSistrix className=" search-btn ml-4" />
            </Nav.Link>
          </Nav>
          <Link
            to="/login"
            className="font-weight-bold ml-5 btn brand-color-bg"
          >
            Sign In
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
