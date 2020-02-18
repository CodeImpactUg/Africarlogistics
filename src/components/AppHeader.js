import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"
import "../assets/css/bootstrap/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap/css/bootstrap-dropdownhover.css";
import "../assets/fontawesome/fonts/line-awesome-font-awesome.min.css";
import "../views/App.css";
import logo from "../assets/img/codeimpact.jpg";

class AppHeader extends Component {
  render() {
    return (
      <div id="appheader">
        <div id="top">
          <div className="container-fluid">
            <div id="top-links" className="nav">
              <ul className="list-inline inline-2">
                <li>
                  <a href="#/">AfricaLogistics</a>
                </li>
                <li>
                  <form
                    method="post"
                    encType="multipart/form-data"
                    id="form-language"
                  >
                    <div className="btn-group">
                      <button className="btn btn-link" data-toggle="dropdown">
                        {" "}
                        Language:
                        <span className="name">
                          <span className="hidden-xs">English</span>{" "}
                          <i className="fa fa-caret-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a href="#/">English</a>
                        </li>
                      </ul>
                    </div>
                  </form>
                </li>
                <li>
                  <form
                    method="post"
                    encType="multipart/form-data"
                    id="form-currency"
                  >
                    <div className="btn-group">
                      <button className="btn btn-link" data-toggle="dropdown">
                        {" "}
                        Currency:
                        <span className="name">
                          <span className="hidden-xs"> (USD)</span>{" "}
                          <i className="fa fa-caret-down"></i>
                        </span>
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <button
                            className="currency-select btn btn-link btn-block"
                            type="button"
                            name="EUR"
                          >
                            &#8364; Euro
                          </button>
                        </li>
                        <li>
                          <button
                            className="currency-select btn btn-link btn-block"
                            type="button"
                            name="GBP"
                          >
                            &#163; GBP
                          </button>
                        </li>
                        <li>
                          <button
                            className="currency-select btn btn-link btn-block"
                            type="button"
                            name="USD"
                          >
                            USD Dollar
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </li>
              </ul>
              <ul className="list-inline pull-right button login-reg cart-top ml-auto">
                <li>
                  <a href="#/">Login</a>
                  <span>/</span>
                  <a href="#/">Register</a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fa fa-heart"></i> Wishlist
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <i className="fa fa-shopping-cart"></i> Cart
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="header" className="header-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-md-4 col-xs-12">
                <div className="social-icon">
                  <ul className="list-inline inline-2">
                    <li className="">
                      <a href="#/" target="_blank">
                        <i
                          className="fa fa-facebook Default-clr-hvr"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="">
                      <a href="#/" target="_blank">
                        <i
                          className="fa fa-twitter Default-clr-hvr"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="">
                      <a href="#/" target="_blank">
                        <i
                          className="fa fa-google-plus Default-clr-hvr"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="">
                      <a href="#/" target="_blank">
                        <i
                          className="fa fa-instagram Default-clr-hvr"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li className="">
                      <a href="#/" target="_blank">
                        <i
                          className="fa fa-pinterest-p Default-clr-hvr"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 col-xs-12 ">
                <div id="logo">
                  <a href="index.html">
                    <img
                      className="img-responsive"
                      src={logo}
                      alt="logo"
                      title="logo"
                    />
                  </a>
                </div>
              </div>
              <div className="col-sm-4 col-md-4 hidden-xs">
                <div className="button-login pull-right">
                  <button type="button" className="btn btn-default btn-lg">
                    Book now
                  </button>
                  <button type="button" className="btn btn-primary btn-lg">
                    {" "}
                    Take A Tour
                    <i
                      className="fa fa-caret-square-o-right"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu" className="default-bg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12 responsive_padding_btm">
                <Navbar
                  bg="dark"
                  expand="lg"
                  variant="dark"
                  sticky="top"
                  className="navbar"
                >
                  <Navbar.Brand href="#home"> </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto nav-links ml-auto">
                      <Nav.Link className="active">
                        <Link to="/" className="nav__link">
                          Home
                        </Link>
                      </Nav.Link>
                      <Nav.Link className="active">
                        <Link to="/about" className="nav__link">
                          About Us
                        </Link>
                      </Nav.Link>
                      <Nav.Link className="active">
                        <Link to="/service" className="nav__link">
                          Services 
                        </Link>
                      </Nav.Link>
                      <Nav.Link className="active">
                        <Link to="/tours" className="nav__link">
                          Tours
                        </Link>
                      </Nav.Link>
                      <Nav.Link className="active">
                        <Link to="/contact" className="nav__link">
                          Contact Us
                        </Link>
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;
