import React from 'react';
import Company1 from '../../../assets/img/company_1.png';
import Company2 from '../../../assets/img/company_2.png';
import Company3 from '../../../assets/img/company_3.png';
import Company4 from '../../../assets/img/company_4.png';
import Company5 from '../../../assets/img/company_5.png';

import './AboutClient.css';

const AboutClient = props => (
    <section className="about_client">
        <div className="container">
            <div className="about_client_wrapper">
                <div className="company">
                    <img src={Company1} alt="Client Company" />
                </div>
                <div className="company">
                    <img src={Company2} alt="Client Company" />
                </div>
                <div className="company">
                    <img src={Company3} alt="Client Company" />
                </div>
                <div className="company">
                    <img src={Company4} alt="Client Company" />
                </div>
                <div className="company">
                    <img src={Company5} alt="Client Company" />
                </div>
            </div>
        </div>
    </section>
)


export default AboutClient