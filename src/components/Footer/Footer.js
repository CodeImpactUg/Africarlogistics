import React from 'react';
// import '../../assets/fontawesome/css/fontawesome.min.css';
import logo from '../../assets/img/codeimpact.jpg';
import place_1 from '../../assets/img/places/p2.jpg';
import place_2 from '../../assets/img/places/p3.jpg';
import place_3 from '../../assets/img/places/p4.jpg'; 


import './Footer.css'

const Footer = props => (
    <footer className="footer">
        <div className="container">
            <div className="footer_flex-container">
            <div className="col__col-3">
                <img src={logo} alt="logo" className="footer_logo" />
                <p className="paragraph">Travelers are always discoverers, especially those who travel by air. There are no signposts in the sky to show a man has passed that way before. There are no channels marked. The flier breaks each second into new uncharted seas.</p>
            </div>
            <div className="col__col-3">
                <h3>Last Minute Deals</h3>
                <div className="places_wrapper">
                    <img src={place_1} alt="Place one" className="places_img" />
                    <div>
                        <h4>Wild Life Tour</h4>
                        <div className="places_info">
                            <i className="fa fa-tag"></i>
                            <p><span>&#36;8,600</span> 30% off:<br />&#36;6,020</p> 
                        </div>
                    </div>
                </div>
                <div className="places_wrapper">
                    <img src={place_2} alt="Place two" className="places_img" />
                    <div>
                        <h4>Wild Life Tour</h4>
                        <div className="places_info">
                           <i className="fa fa-tag"></i>
                           <p><span>&#36;8,600</span> 30% off:<br />&#36;6,020</p> 
                        </div>
                    </div>
                </div>
                <div className="places_wrapper">
                    <img src={place_3} alt="Place three" className="places_img" />
                    <div>
                        <h4>Wild Life Tour</h4>
                        <div className="places_info">
                           <i className="fa fa-tag"></i>
                           <p><span>&#36;8,600</span> 30% off:<br />&#36;6,020</p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="col__col-3">
                <h3>Contact Info</h3>
                <ul className="contact_info">
                    <li>
                      <i class="fa fa-map-marker"></i>
                      14 Tottenham Court Road, NewYork
                    </li>
                    <li>
                        <i class="fa fa-phone"></i>
                        +1(784)-775-95-377 <br />
                        +1(784)-678-26-567N
                    </li>
                    <li>
                        <i class="fa fa-envelope"></i>
                        info@youremail.com <br />
                        www.codeimpact.com
                    </li>
                </ul>
            </div>
            </div>
        </div>
    </footer>
)

export default Footer