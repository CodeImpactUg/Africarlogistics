import React from 'react';
import SortBy from '../SortBy/SortBy';
import LongCard1 from '../../../assets/img/1.jpg';
import LongCard2 from '../../../assets/img/2.jpg';
import LongCard3 from '../../../assets/img/3.jpg';
import LongCard4 from '../../../assets/img/4.jpg';
import LongCard5 from '../../../assets/img/5.jpg';
import LongCard6 from '../../../assets/img/6.jpg';

import './ServiceContent.css'

const ServiceContent = props => (
    <section className="service_content">
        <div className="container">
            <SortBy />
          <div className="long_card_wrapper">
            <span>Service with AfricarLogistics</span>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard1} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>Airfare Tickets</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;36.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviews</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard2} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>Truck and Car hire prices</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;36.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviewer</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard3} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>Airport Transfers Fuel Inclusive</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;45.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviewer</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard4} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>Trucks - Town Running No Fuel</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;49.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviewer</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard5} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>Trucks - Upcountry No Fuel</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;49.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviewer</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
            <div className="long_card">
                <div className="long_card_img">
                    <img src={LongCard6} alt="Service" />
                </div>
                <div className="long_card_cont">
                    <h3>AfricarLogistics Licensed Vehicles</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et. Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p>
                </div>
                <div className="card_cont_sep" />
                <div className="long_card_info">
                    <h3>&#36;49.00</h3><span>/person</span>
                    <div className="long_card_rate">
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <i className="fa fa-star"></i>
                       <span>75 reviewer</span>
                    </div>
                    <a href="/" className="booking_btn">Book</a>
                </div>
            </div>
          </div>
        </div>
    </section>
)

export default ServiceContent