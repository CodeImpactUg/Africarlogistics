import React from 'react';

import './PriceRange.css';

const PriceRange = props => (
    <div className="price_range">
        <h5>Price Range</h5>
        <div className="line_separator" />
        <div className="price_range_wrapper">
            <div className="range_start">
                <span className="box"></span>
                <span className="price">&#36;0</span>
            </div>
            <div className="price_range_line"></div>
            <div className="range_start">
                <span className="box"></span>
                <span className="price">&#36;9000</span>
            </div>
        </div>
    </div>
)

export default PriceRange