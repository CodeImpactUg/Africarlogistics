import React from 'react';
import { Carousel } from 'react-bootstrap';
import Client1 from '../../../assets/img/client1.png';
import Client2 from '../../../assets/img/client2.png';
import Client3 from '../../../assets/img/client3.png';

import './GuestReview.css'

const GuestReview = props => (
    <section className="guest_review">
        <div className="container">
            <h2>Guest Review</h2>
            <div className="line_separator" />
            <Carousel>
                <Carousel.Item>
                    <div className="review_rwapper">
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client1} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i> @magimbijr</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client2} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i> @rachelken</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client3} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i>  @samjunior</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="review_rwapper">
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client1} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i> @magimbijr</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client2} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i> @rachelken</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                        <div className="review_card ">
                            <div className="card">
                               <p>Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
                            </div>
                            <img src={Client3} alt="First Client" className="client_img" />
                            <div className="insta_handle_date">
                                <p><i className="fa fa-instagram"></i> @samjunior</p>
                                <div className="flex" />
                                <p>20, Jan</p>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </section>
)

export default GuestReview