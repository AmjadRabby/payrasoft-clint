import React from "react";
import "./Home.css";
import AboutCompany from "../AboutCompany/AboutCompany";
import BestServices from "../BestServices/BestServices";
import ClientReviews from "../ClientReviews/ClientReviews";
import ContactCompany from "../ContactCompany/ContactCompany";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MultiRowSlides from "../MultiRowSlides/MultiRowSlides";
import OurServices from "../OurServices/OurServices";
import OurSoftware from "../OurSoftware/OurSoftware";
import OurWebsite from "../OurWebsite/OurWebsite";
import SendMassage from "../SendMassage/SendMassage";
import ScrollToTopBtn from "./ScrollToTop";

const Home = () => {
  return (
    <div>
      <Header />
      <OurServices />
      <AboutCompany />
      <OurWebsite />
      <OurSoftware />
      <BestServices />
      <MultiRowSlides />
      <ContactCompany />
      <ClientReviews />
      <SendMassage />
      <Footer />
      <ScrollToTopBtn />
    </div>
  );
};

export default Home;
