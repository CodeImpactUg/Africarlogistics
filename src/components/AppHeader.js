import React, { Component } from "react";
import "../assets/css/bootstrap/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/bootstrap/css/bootstrap-dropdownhover.css";
import "../assets/fontawesome/fonts/line-awesome-font-awesome.min.css";
import "../views/App.css";
import logo from "../assets/img/codeimpact.jpg";

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ menu: !this.state.menu });
  }
  render() {
    const collapse = this.state.menu;
    const classOne = collapse
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapse
      ? "navbar-toggler navbar-toggler-right collapse"
      : "navbar-toggler navbar-toggler-right";
    return (
      <div id="appheader">
        <div id="top">
          <div className="container">
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
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-xs-12 responsive_padding_btm">
                <nav className="navbar navbar-expand-lg navbar-dark transparent-nav">
                  <a className="navbar-brand" href="#/">
                    {" "}
                  </a>
                  <button
                    onClick={this.toggleMenu}
                    className={`${classTwo}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className={`${classOne}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#/">
                          Home <span className="sr-only">(current)</span>
                        </a>
                      </li>

                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Pages{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#/">
                            Action
                          </a>
                          <a className="dropdown-item" href="#/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#/">
                            Something else here
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Tour{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#/">
                            Action
                          </a>
                          <a className="dropdown-item" href="#/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#/">
                            Something else here
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Hotels{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#/">
                            Action
                          </a>
                          <a className="dropdown-item" href="#/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#/">
                            Something else here
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Cars{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#/">
                            Action
                          </a>
                          <a className="dropdown-item" href="#/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#/">
                            Something else here
                          </a>
                        </div>
                      </li>
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          href="#/"
                          id="navbarDropdown"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          {" "}
                          Flights{" "}
                        </a>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="navbarDropdown"
                        >
                          <a className="dropdown-item" href="#/">
                            Action
                          </a>
                          <a className="dropdown-item" href="#/">
                            Another action
                          </a>
                          <div className="dropdown-divider"></div>
                          <a className="dropdown-item" href="#/">
                            Something else here
                          </a>
                        </div>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input
                        className="form-control mr-sm-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                      <button
                        className="btn btn-outline-light my-2 my-sm-0"
                        type="submit"
                      >
                        Search
                      </button>
                    </form>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppHeader;
