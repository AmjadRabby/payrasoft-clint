import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";
import logo from "../../../images/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaHeadset,
  FaLocationArrow,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-danger">
      <Container>
        <div className="row mb-4 text-center   brand-color-heading">
          <div className="col-md-3  brand-color-heading">
            <div className="brand-color-heading">
              <p className="text-secondary">About US</p>
              <p className="text-secondary">Company Profile</p>
              <p className="text-secondary">Our Services</p>
              <p className="text-secondary">Contact US</p>
              <p className="text-secondary">FAQ</p>
            </div>
          </div>
          <div className="col-md-3">
            <p className="text-secondary">Help & Support</p>
            <p className="text-secondary">Trust & Safety</p>
            <p className="text-secondary">Payment System</p>
            <p className="text-secondary">Terms of Conditions</p>
            <p className="text-secondary">Privacy Policy</p>
          </div>
          <div className="col-md-3">
            <p className="text-secondary">Our Feature</p>
            <p className="text-secondary">Why Choose US</p>
            <p className="text-secondary">Our Skill</p>
            <p className="text-secondary">Testimonials</p>
            <p className="text-secondary">Our Clients</p>
          </div>
          <div className="col-md-3">
            <p className="text-secondary">Affiliate</p>
            <p className="text-secondary">Join our team</p>
            <p className="text-secondary">Blog</p>
            <p className="text-secondary">Press</p>
            <p className="text-secondary">Sitemap</p>
          </div>
        </div>
      </Container>
      <div className="row bg-light p-5">
        <div className="col-md-5">
          <img src={logo} alt="" className="img-fluid footer-logo" />
          <div className="mt-3 text-center text-muted">
            <a href="#" className="facebook-icon">
              <FaFacebook className="social-media" />
            </a>
            <a href="#" className="twitter-icon">
              <FaTwitter className="social-media" />
            </a>
            <a href="#" className="youtube-icon">
              <FaYoutube className="social-media" />
            </a>
          </div>
        </div>
        <div className="col-md-3 position-relative ">
          <FaHeadset className="headset-icon brand-color " />
          <h5 className="text-dark">24/7 Support</h5>
          <p className="text-secondary">01866776970</p>
          <p className="text-secondary">hello@payrasoft.com</p>
          <p className="text-secondary">www.payrasoft.com</p>
        </div>
        <div className="col-md-3 position-relative">
          <FaLocationArrow className="headset-icon brand-color " />
          <h5 className="text-dark">Our Office:</h5>
          <p className="text-secondary">
            7/A Sobahanbag,Mirpur Road, Dhaka-1207
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
