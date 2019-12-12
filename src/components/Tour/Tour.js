import React from 'react';
import tour1 from "../../assets/img/img-1.jpeg";

import "./Tour.css"

const Tour = props => (
    <section className="tour_section">
        <h2>Our Gallery</h2>
        <span className="line_separator" />
        <ul className="tour_tour_nav">
            <li>
                <a href="/">All</a>
            </li>
            <li>
                <a href="/">Bungalo</a>
            </li>
            <li>
                <a href="/">Hostel</a>
            </li>
            <li>
                <a href="/">Hotel</a>
            </li>
            <li>
                <a href="/">Villa</a>
            </li>
        </ul>
        <div className="tour_list_container">
        <ul className="tour_list">
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
        </ul>
        <ul className="tour_list">
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour1} alt="List one" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
        </ul>
        </div>
    </section>
);

export default Tour