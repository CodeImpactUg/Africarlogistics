import React, { Component } from "react";
import "../../views/App.css";
import "./Contacts.css";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <div className="inner-page-header">
          <div className="title-breadcrumb">
            <div className="container">
              <div className="site-page-breadcrumb">
                <span>
                  <a href="/">Home</a>
                  <i className="fa fa-angle-double-right"></i> Contact Us
                </span>
              </div>
            </div>
          </div>
        </div>
        <section id="contact" className="contact-area section-padding">
          <div className="container">
            <div className="row contact-sec">
              {/* <div className="row contact-form-design-area"> */}
              <div className="col-xl-8 col-lg-8 col-md-12">
                <div className="section-title ">
                  <h2>Get in Touch</h2>
                  <div className="title-separator-outer ">
                    <div className="title-separator bg-primary style-liner"></div>
                  </div>
                </div>
                <div className="contact-form">
                  <form
                    id="contact-form"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          id="contact_name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          id="contact_email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="phone"
                          className="form-control"
                          id="phone"
                          placeholder="phone"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="subject"
                          className="form-control"
                          id="contact_subject"
                          placeholder="subject"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          rows="6"
                          name="message"
                          className="form-control"
                          id="message"
                          placeholder="Your Message"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="col-md-12 text-center Default-clr-hvr">
                        <div
                          className="actions wow fadeInUp "
                          data-wow-delay=".4s"
                        >
                          <input
                            type="submit"
                            value="send Now"
                            name="submit"
                            id="submit"
                            className="Default-clr-hvr"
                            title="Submit Your Message!"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* </div> */}
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="section-title ">
                  <h2>Contact info</h2>
                  <div className="title-separator-outer ">
                    <div className="title-separator bg-primary style-liner"></div>
                  </div>
                </div>
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div className="contact-icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <h4>+1234321321</h4>
                  <p>Mon-Fri 9:00 am till 6:00 pm</p>
                </div>
                <div className="clearfix"></div>
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  <div className="contact-icon">
                    <i className="fa fa-envelope"></i>
                  </div>
                  <h4>websitename@mail.com</h4>
                  <p>We reply with in 24 hours</p>
                </div>
                <div className="clearfix"></div>
                <div
                  className="single-contact wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className="contact-icon">
                    <i className="fa fa-map-marker"></i>
                  </div>
                  <p>
                    Moutain Drive , Kensigten
                    <br /> London , United Kingdom
                  </p>
                </div>
                <div className="clearfix"></div>
                <div className="contact-socials">
                  <h4>Follow Us Social</h4>
                  <ul>
                    <li>
                      <a href="/#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="fa fa-behance"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="contactmap">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="map1  wow fadeInUp">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.2871743706564!2d-71.06165938447522!3d42.357718779187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708485209583%3A0x6e248f25891a1cc4!2sSchool+St%2C+Boston%2C+MA+02108%2C+USA!5e0!3m2!1sen!2sin!4v1507011599646"
                    frameBorder="0"
                    title="map"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
