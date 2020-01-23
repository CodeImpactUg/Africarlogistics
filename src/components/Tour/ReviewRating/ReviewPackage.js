import React from 'react';

import './ReviewRating.css'

const ReviewPackage = props => (
    <div className="review_rating">
        <h5>Package Review</h5>
        <div className="line_separator" />
        <div className="package_review_wrapper">
            <div className="package_rating">
                <p><input type="checkbox" />Pet Allowed</p>
                <p><input type="checkbox" />Groups Allowed</p>
                <p><input type="checkbox" />Tour Guides</p>
                <p><input type="checkbox" />Access For Disables</p>
            </div>
        </div>
    </div>
)

export default ReviewPackage