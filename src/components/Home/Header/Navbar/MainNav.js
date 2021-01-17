import React from "react";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaSistrix, FaPhoneAlt } from "react-icons/fa";

const MainNav = () => {
  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className=" main_navbar p-1 justify-content-center"
    >
      <Container className="p-0 ">
        <Navbar.Brand href="#home">
          <img className="img-fluid logo" src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-auto" id="basic-navbar-nav">
          <Nav className="">
            <Nav.Link className="navbar-item" href="#home">
              Home
            </Nav.Link>
            <NavDropdown
              className="navbar-item"
              title="Service"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Web Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Software Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                Apps Development
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                WordPress Development
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Virtual Assistant
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Re-design Services
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Digital Marketing
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="navbar-item"
              title="Demo"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Website</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Software</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Apps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Wordpress Website
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Products</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="navbar-item text-white"
              title="Company"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                {" "}
                Company Profile
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                {" "}
                Why Choose Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Payment System
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Terms of Service
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Trust and Safety
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Help & Support
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">FAQ</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Testimonials
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                {" "}
                Privacy policy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Terms and conditions
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Sitemap</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Job</NavDropdown.Item>
            </NavDropdown>
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
              <FaSistrix className="text-white search-btn ml-4" />
            </Nav.Link>
          </Nav>
          <Button className="ml-5" variant="outline-danger font-weight-bold">
            Sign In
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNav;
