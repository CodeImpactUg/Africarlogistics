import React, { Component } from "react";
import "../assets/css/bootstrap/css/bootstrap.min.css";
import "../assets/css/responsive.css";
import "../assets/css/venobox.css";
import "../assets/css/media-queries.css";
import "../assets/css/bootstrap/css/bootstrap-dropdownhover.css";
import "../assets/fontawesome/fonts/line-awesome-font-awesome.min.css";
import "../views/App.css";
import ReactWOW from "react-wow";

class AppHeaderSlider extends Component {
  render() {
    return (
      <div id="slider">
        <section className="welcome-image-area5">
          <div className="display-table">
            <div className="display-table-cell5">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="header-text text-center">
                      <h1 className="cursive">Where to Travel</h1>
                      <h2 className="rubike">
                        Discover your next great adventure,become an explorer to
                        get started.
                      </h2>
                      <ReactWOW animation="fadeInRight" delay="0.5s">
                        <div className="slide-detail col-md-9 col-lg-5">
                          <form className="form-horizontal" method="post">
                            <div className="form-group">
                              <div className="col-sm-12">
                                <h3 className="rubike">Search Place</h3>
                                <label>find your dream place now</label>
                                <div className="form-icons">
                                  <input
                                    name="s"
                                    className="form-control"
                                    value=""
                                    placeholder="Search place"
                                    type="text"
                                  />
                                  <span className="fa fa-search"></span>
                                </div>
                                <div className="form-icons">
                                  <input
                                    name="d"
                                    className="form-control"
                                    value=""
                                    placeholder="Destination"
                                    type="text"
                                  />
                                  <span className="fa fa-plane"></span>
                                </div>
                                <div className="form-icons">
                                  <input
                                    name="t"
                                    className="form-control"
                                    value=""
                                    placeholder="Travel Type.."
                                    type="text"
                                  />
                                  <span className="fa fa-car"></span>
                                </div>
                                <div className="form-icons">
                                  <input
                                    name="m"
                                    className="form-control"
                                    value=""
                                    placeholder="Month"
                                    type="text"
                                  />
                                  <span className="fa fa-calendar"></span>
                                </div>
                                <button className="btn-primary" type="button">
                                  search place
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </ReactWOW>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AppHeaderSlider;
