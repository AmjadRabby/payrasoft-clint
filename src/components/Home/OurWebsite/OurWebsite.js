import React, { useState } from "react";
import "./OurWebsite.css";
import { Container } from "react-bootstrap";
import { websiteData } from "../../../data/data";
import Website from "./Website";

const OurWebsite = () => {
  const [websites, setWebsite] = useState(websiteData);
  //   console.log(website);
  return (
    <div className="mb-5 pt-5 bg-light">
      <Container>
        <h1 className="text-center brand-color mb-5">OUR WEBSITE ​</h1>
        <div className="row">
          {websites.map((item) => (
            <Website key={item.id} website={item} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurWebsite;
