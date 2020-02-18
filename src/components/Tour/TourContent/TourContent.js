import React from 'react'; 
import Form from '../Search/Search';
import PriceRange from '../PriceRange/PriceRange';
import ReviewRating from '../ReviewRating/ReviewRating';
import ReviewPackage from '../ReviewRating/ReviewPackage';
import PrevNext from '../PrevNext/PrevNext';
import Tour1 from '../../../assets/img/tours1.jpg';
import Tour2 from '../../../assets/img/tours2.jpg';
import Tour3 from '../../../assets/img/tours3.jpg';
import Tour4 from '../../../assets/img/tours4.jpg';
import Tour5 from '../../../assets/img/tours5.jpg';
import Tour6 from '../../../assets/img/tours6.jpg';

import './TourContent.css';

const TourContent = props => (
    <section className="tour_content">
        <div className="container">
            <div className="tour_cont_wrapper">
                <main className="main">
                    <div className="tour_card">
                        <div className="card_img">
                            <img src={Tour1} alt="Tour" />
                        </div>
                        <div className="tour_card_info">
                            <div className="tour_price">
                                <span>&#36;4500.00</span>
                            </div>
                            <div className="tour_add_info">
                                <h3>Tsavo national park</h3>
                                <p>Hotel: 5 star</p>
                                <p>Book Now and save 30%</p>
                                <p>Person: 2 save 30%</p>
                                <a href="/" className="card_btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tour_card">
                        <div className="card_img">
                            <img src={Tour2} alt="Tour" />
                        </div>
                        <div className="tour_card_info">
                            <div className="tour_price">
                                <span>&#36;4500.00</span>
                            </div>
                            <div className="tour_add_info">
                                <h3>Rhino sanctuary</h3>
                                <p>Hotel: 5 star</p>
                                <p>Book Now and save 30%</p>
                                <p>Person: 2 save 30%</p>
                                <a href="/" className="card_btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tour_card">
                        <div className="card_img">
                            <img src={Tour3} alt="Tour" />
                        </div>
                        <div className="tour_card_info">
                            <div className="tour_price">
                                <span>&#36;4500.00</span>
                            </div>
                            <div className="tour_add_info">
                                <h3>Kidepo National park</h3>
                                <p>Hotel: 5 star</p>
                                <p>Book Now and save 30%</p>
                                <p>Person: 2 save 30%</p>
                                <a href="/" className="card_btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tour_card">
                        <div className="card_img">
                            <img src={Tour4} alt="Tour" />
                        </div>
                        <div className="tour_card_info">
                            <div className="tour_price">
                                <span>&#36;4500.00</span>
                            </div>
                            <div className="tour_add_info">
                                <h3>Paara Lodge</h3>
                                <p>Hotel: 5 star</p>
                                <p>Book Now and save 30%</p>
                                <p>Person: 2 save 30%</p>
                                <a href="/" className="card_btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="tour_card">
                        <div className="card_img">
                            <img src={Tour5} alt="Tour" />
                        </div>
                        <div className="tour_card_info">
                            <div className="tour_price">
                                <span>&#36;4500.00</span>
                            </div>
                            <div className="tour_add_info">
                                <h3>Enengo valley</h3>
                                <p>Hotel: 5 star</p>
                                <p>Book Now and save 30%</p>
                                <p>Person: 2 save 30%</p>
                                <a href="/" className="card_btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                    <PrevNext />
                </main>
                <aside className="sidebar">
                    <Form />
                    <PriceRange />
                    <ReviewRating />
                    <ReviewPackage />
                </aside>
            </div>
        </div>
    </section>
)

export default TourContent