import React from 'react';

import './ReviewRating.css'

const ReviewRating = props => (
    <div className="review_rating">
        <h5>Review Rating</h5>
        <div className="line_separator" />
        <div className="star_rating_wrapper">
        <div className="star_rating">
            <input type="checkbox" />
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <div className="star_rating">
            <input type="checkbox" />
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <div className="star_rating">
            <input type="checkbox" />
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <div className="star_rating">
            <input type="checkbox" />
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
        </div>
        <div className="star_rating">
            <input type="checkbox" />
            <i className="fa fa-star"></i>
        </div>
        </div>
    </div>
)

export default ReviewRating