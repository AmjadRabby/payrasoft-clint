import React from "react";
import { Container, Row } from "react-bootstrap";
import "./ContactCompany.css";
import { useForm } from "react-hook-form";

const ContactCompany = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);


  return (
    <section className="contact-company d-flex align-items-center pt-5 pb-5">
      <Container className="">
        <Row>
          <div className="col-md-6 pb-5 ">
            <h1 className="text-light mb-3">
              Payrasoft is a Custom Software Development company
            </h1>
            <p className="text-light">
              We provide Custom software development and it outsourcing
              services. Our developers build custom software for individuals
              startuo, and small to medium business.
            </p>
          </div>
          <div className="col-md-6  rounded m-auto p-4 contact-form">
            <h2 className="mb-4 text-center text-light">
              Need a Custom Software Tell us about Your Project
            </h2>
            <form className="" onSubmit={handleSubmit(onSubmit)}>
              <input
                className="form-control border-0 p-3 mb-3"
                name="name"
                defaultValue="*Name"
                ref={register}
              />

              <input
                className="form-control border-0  p-3 mb-3"
                name="email"
                defaultValue="*Email"
                ref={register({ required: true })}
              />
              <input
                className="form-control border-0  p-3 mb-4 "
                name="massage"
                defaultValue="*Describe your idea"
                ref={register({ required: true })}
              />

              {errors.exampleRequired && (
                <span className="text-danger ">This field is required</span>
              )}

              <input
                className="form-control brand-btn border-0"
                type="submit"
                value="Get a FREE Quote"
              />
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default ContactCompany;
