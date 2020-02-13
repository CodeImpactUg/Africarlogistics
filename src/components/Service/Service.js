import React from 'react';
import service1 from '../../assets/img/places/p1.jpg';
import service2 from '../../assets/img/places/p2.jpg';
import service3 from '../../assets/img/places/p3.jpg';
import service4 from '../../assets/img/places/p4.jpg';
import service5 from '../../assets/img/places/p5.jpg';
import service6 from '../../assets/img/places/p6.jpg';

import './Service.css';

const Service = props => (
    <section>
        <div className="services_container">
        <h2>Book Now By Category</h2>
        <hr className="line_separator" />
        <ul className="services_list">
            <li>
                <a href="/" className="active">All</a>
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
        <div className="services_card">
            <div className="card_item">
                <div className="card_header">
                <img src={service1} alt="Service one" />
                <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>Grand Switerland &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>Grand Switerland</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
            <div className="card_item">
                <div className="card_header">
                    <img src={service2} alt="Service two" />
                    <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>Descover Japan &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>Discover Japan</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
            <div className="card_item">
                <div className="card_header">
                    <img src={service3} alt="Service three" />
                    <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>Niko Trip &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>Niko Trip</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
            <div className="card_item">
                <div className="card_header">
                    <img src={service4} alt="Service four" />
                    <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>Singapore Trip &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>Singapore Trip</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
            <div className="card_item">
                <div className="card_header">
                    <img src={service5} alt="Service five" />
                    <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>The New Carlifonia  &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>The New Carlifonia</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
            <div className="card_item">
                <div className="card_header">
                    <img src={service6} alt="Service six" />
                    <div className="card_header_background"></div>
                </div>
                <div className="pic_description">
                    <p>Astro Place Hotel &#36;575.00</p>
                </div>
                <a href="/" className="icon_link">
                    <i className="fa fa-link"></i>
                </a>
                <div className="card_content">
                    <h3>Astro Place Hotels</h3>
                    <div className="card_rate">
                       <span className="rate_deals">Hot Deals</span>
                       <span className="five_stars">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-half-o"></i>
                       </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                </div>
                <button className="card_btn">Book Now</button>
                <button className="card_btn">View More</button>
            </div>
        </div>
        </div>
    </section>
)

export default Service