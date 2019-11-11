import React, { Component } from "react";
import "../assets/css/bootstrap/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/venobox.css";
import "../assets/css/animate.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/lightslider.css";
import "../assets/css/owl.carousel.min.css";
import "../assets/owlcarousel/css/owl.carousel.css";
import "../assets/owlcarousel/css/owl.theme.css";
import "../assets/css/media-queries.css";
import "../assets/css/bootstrap/css/bootstrap-dropdownhover.css";
import "../assets/fontawesome/fonts/line-awesome-font-awesome.min.css";
import "../views/App.css";
import ReactWOW from "react-wow";
import p1 from "../assets/img/places/p1.jpg";
import p2 from "../assets/img/places/p2.jpg";
import p3 from "../assets/img/places/p3.jpg";
import p4 from "../assets/img/places/p4.jpg";
import p5 from "../assets/img/places/p5.jpg";
import p6 from "../assets/img/places/p6.jpg";

class TravelPlaces extends Component {
  render() {
    return (
      <div className="placetop">
        <div className="container">
          <div className="places">
            <div className="section-title text-center">
              <h2>Where to Travel</h2>
              <div className="title-separator-outer ">
                <div className="title-separator bg-primary style-liner"></div>
              </div>
            </div>
            {/* Start places Button */}
            <div className="col-md-12">
              <div className="gallery-menu text-center gallery-menu-5">
                <button type="button" className="active" data-filter="*">
                  All
                </button>
                <button type="button" data-filter=".cat-1">
                  Tanzania
                </button>
                <button type="button" data-filter=".cat-2">
                  Uganda
                </button>
                <button type="button" data-filter=".cat-3">
                  Kenya
                </button>
                <button type="button" data-filter=".cat-4">
                  Rwanda
                </button>
                <button type="button" data-filter=".cat-5">
                  Burundi
                </button>
                <button type="button" data-filter=".cat-6">
                  South Africa
                </button>
              </div>
            </div>
            {/* End places Button */}
          </div>
          <div className="gallery-items5">
            <ReactWOW animation="zoomIn">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12 grid-item  cat-2 cat-4 cat-6">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="#/">
                        <img
                          src={p1}
                          alt="p1"
                          title="p1"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p1}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>Dar es Salaam City</h2>
                        <p>start from $375.00</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">top rates</a>
                          </li>
                          <li>
                            <a href="#/">hotel deals </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>Kilimanjaro Hotel</h4>
                        <span>1270 RATES</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12  grid-item cat-1 cat-4 cat-5">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="/">
                        <img
                          src={p2}
                          alt="p2"
                          title="p2"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p2}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>لاس فيجاس</h2>
                        <p>تبدأ من 375.00 دولار</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">أعلى معدلات</a>
                          </li>
                          <li>
                            <a href="#/">عروض الفنادق </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>قطاع لاس فيغاس</h4>
                        <span>1270 مراجعات</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12  grid-item cat-2 cat-3 cat-4 cat-5">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="#/">
                        <img
                          src={p3}
                          alt="p3"
                          title="p3"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p3}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>لوس أنجلوس</h2>
                        <p>تبدأ من 375.00 دولار</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">أعلى معدلات</a>
                          </li>
                          <li>
                            <a href="#/">عروض الفنادق </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>استديوهات عالمية</h4>
                        <span>1270 مراجعات</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
            <ReactWOW animation="zoomIn">
              <div className="row">
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12  grid-item cat-2 cat-3">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="#/">
                        <img
                          src={p4}
                          alt="p4"
                          title="p4"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p4}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>سان فرانسيسكو</h2>
                        <p>تبدأ من 375.00 دولار</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">أعلى معدلات</a>
                          </li>
                          <li>
                            <a href="#/">عروض الفنادق </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>جسر البوابة الذهبية</h4>
                        <span>1270 مراجعات</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12  grid-item cat-1 cat-2 cat-4 cat-6">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="#/">
                        <img
                          src={p5}
                          alt="p5"
                          title="p5"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p5}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>بوسطن</h2>
                        <p>تبدأ من 375.00 دولار</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">أعلى معدلات</a>
                          </li>
                          <li>
                            <a href="#/">عروض الفنادق </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>درب الحرية</h4>
                        <span>1270 مراجعات</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12  grid-item cat-1  cat-4">
                  <div className="product-thumb">
                    <div className="image">
                      <a href="#/">
                        <img
                          src={p6}
                          alt="p6"
                          title="p6"
                          className="img-responsive"
                        />
                      </a>
                      <div className="hoverbox">
                        <div className="icon_plus" aria-hidden="true"></div>
                        <span>
                          <a
                            className="venobox"
                            data-gall="myGallery"
                            href={p6}
                          >
                            <i className="fa fa-link"></i>
                          </a>
                        </span>
                      </div>
                      <div className="matter">
                        <h2>واشنطن العاصمة.</h2>
                        <p>تبدأ من 375.00 دولار</p>
                        <ul className="list-inline">
                          <li>
                            <a href="#/">أعلى معدلات</a>
                          </li>
                          <li>
                            <a href="#/">عروض الفنادق </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="caption">
                      <div className="inner">
                        <span className="fa fa-map-marker"></span>
                        <h4>نصب لينكولن التذكاري</h4>
                        <span>1270 مراجعات</span>
                        <div className="rate">
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i className="fa fa-star" aria-hidden="true"></i>
                          <i
                            className="fa fa-star-half-o"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ReactWOW>
          </div>
        </div>
      </div>
    );
  }
}

export default TravelPlaces;
