import React from 'react';
import tour1 from "../../assets/img/img-1.jpg";
import tour2 from "../../assets/img/img-2.jpg";
import tour3 from "../../assets/img/img-3.jpg";
import tour4 from "../../assets/img/img-4.jpg";
import tour5 from "../../assets/img/img-5.jpg";
import tour6 from "../../assets/img/img-6.jpg";
import tour7 from "../../assets/img/img-7.jpg";
import tour8 from "../../assets/img/img-8.jpg";

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
                    <img src={tour2} alt="List two" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour3} alt="List three" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour4} alt="List four" className="fig_img" />
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
                    <img src={tour5} alt="List five" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour6} alt="List six" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour7} alt="List seven" className="fig_img" />
                    <figcaption>
                        <h4>World Tour</h4>
                        <a href="/">View More <i className="fa fa-angle-double-right"></i></a>
                    </figcaption>
                </figure>
                <div className="img_background"></div>
            </li>
            <li>
                <figure>
                    <img src={tour8} alt="List eight" className="fig_img" />
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