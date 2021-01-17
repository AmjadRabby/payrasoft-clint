import React from "react";
import AboutCompany from "../AboutCompany/AboutCompany";
import BestServices from "../BestServices/BestServices";
import ClientReviews from "../ClientReviews/ClientReviews";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MultiRowSlides from "../MultiRowSlides/MultiRowSlides";
import OurServices from "../OurServices/OurServices";
import OurSoftware from "../OurSoftware/OurSoftware";
import OurWebsite from "../OurWebsite/OurWebsite";
import SendMassage from "../SendMassage/SendMassage";

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
      <ClientReviews />
      <SendMassage />
      <Footer />
    </div>
  );
};

export default Home;
