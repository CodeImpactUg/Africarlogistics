import React, { Component } from "react";
import "../assets/css/bootstrap/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/venobox.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/owlcarousel/css/owl.carousel.css";
import "../assets/owlcarousel/css/owl.theme.css";
import "../assets/css/media-queries.css";
import Carousel from "react-bootstrap/Carousel";
import "../assets/css/bootstrap/css/bootstrap-dropdownhover.css";
import "../assets/fontawesome/fonts/line-awesome-font-awesome.min.css";
import "../views/App.css";
import Quoteopen from "../assets/img/quote-sign-left.png";
import Quoteclose from "../assets/img/quote-sign-right.png";
import client1 from "../assets/img/clientreview/testimonial-1.jpg";
import client2 from "../assets/img/clientreview/testimonial-2.jpg";
import client3 from "../assets/img/clientreview/testimonial-3.jpg";
import client4 from "../assets/img/clientreview/testimonial-4.jpg";

class ClientsReviews extends Component {
  render() {
    return (
      <div id="clientsreviews">
        <section
          id="testimonials"
          className="testimonial-area section-padding testimonial-5"
          data-stellar-background-ratio="0.6"
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="section-title text-center">
                  <h2>Clients Reviews</h2>
                  <div className="title-separator-outer ">
                    <div className="title-separator bg-primary style-liner"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <Carousel className="clients-carousel" item={3}>
                <Carousel.Item className="clients-item">
                  <p>
                    <img src={Quoteopen} className="quote-sign-left" alt="" />
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <img src={Quoteclose} className="quote-sign-right" alt="" />
                  </p>
                  <img src={client1} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </Carousel.Item>
                <Carousel.Item className="clients-item">
                  <p>
                    <img src={Quoteopen} className="quote-sign-left" alt="" />
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <img src={Quoteclose} className="quote-sign-right" alt="" />
                  </p>
                  <img src={client2} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </Carousel.Item>
                <Carousel.Item className="clients-item">
                  <p>
                    <img src={Quoteopen} className="quote-sign-left" alt="" />
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <img src={Quoteclose} className="quote-sign-right" alt="" />
                  </p>
                  <img src={client3} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </Carousel.Item>
                <Carousel.Item className="clients-item">
                  <p>
                    <img src={Quoteopen} className="quote-sign-left" alt="" />
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                    <img src={Quoteclose} className="quote-sign-right" alt="" />
                  </p>
                  <img src={client4} className="testimonial-img" alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ClientsReviews;
