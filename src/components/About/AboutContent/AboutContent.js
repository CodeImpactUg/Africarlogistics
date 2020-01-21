import React from 'react';
import About from '../../../assets/img/about.jpg';

import './AboutContent.css';

const AboutContent = props => (
    <section>
        <div className="container">
            <div className="about_content">
            <div className="about_cont_text">
                <h2>Our Journey</h2>
                <hr className="line_separator" />
                <p className="main_par">Since 2009, our strong company culture and passion for our profession has resulted in our being named each year as one of the "Best Places To Work" in Los Angeles County. Our management is active on various travel advisory boards and committees for travel organizations, travel magazines (Afar, Travel+Leisure), major hotel brands, & more.</p>
                <div className="about_features">
                    <p><i className="fa fa-share"></i>First Class Flights</p>
                    <p><i className="fa fa-share"></i>5 Star Accommodations</p>
                    <p><i className="fa fa-share"></i>Inclusive Packages</p>
                    <p><i className="fa fa-share"></i>Latest Model Vehicles</p>
                    <p><i className="fa fa-share"></i>Handpicked Hotels</p>
                    <p><i className="fa fa-share"></i>Accesibility Managmen</p>
                    <p><i className="fa fa-share"></i>10 Languages Available</p>
                    <p><i className="fa fa-share"></i>+120 Premium City Tours</p>
                </div>
            </div>
            <div className="about_cont_img">
                <img src={About} alt="About Us" />
            </div>
            </div>
            <div className="about_content_wrapper">
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-bookmark"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-cubes"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-archive"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-bar-chart"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-umbrella"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card_bg">
                        <div className="card_cont">
                            <div className="card_icon">
                                <i className="fa fa-users"></i>
                            </div>
                            <h3>Personalized Matching</h3>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default AboutContent