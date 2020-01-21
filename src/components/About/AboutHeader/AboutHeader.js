import React from 'react';
import AppHeader from '../../AppHeader';

import './AboutHeader.css'

const AboutHeader = props => (
    <section>
        <AppHeader />
        <div className="about_header">
            <div className="container">
               <h1>About Us</h1>
            </div>
        </div>
    </section>
)
export default AboutHeader