import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="navbar pt-0 pb-0 nav-container">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item pr-4">
            <FaPhoneAlt /> +8801866776970
          </li>
          <li className="nav-item">
            {" "}
            <FaEnvelope /> hello@payrasoftbd.com
          </li>
        </ul>
        <ul className="nav ml-auto">
          <li className="nav-item">
            <a className="nav-link actives " aria-current="page" href="#">
              <FaTwitter />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link actives " href="#">
              <FaFacebookF />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link actives " aria-current="page" href="#">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link actives" href="#">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
