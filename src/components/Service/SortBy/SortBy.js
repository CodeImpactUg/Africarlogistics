import React from 'react';

import './SortBy.css'

const SortBy = props => (
    <section className="sort_by">
        <div className="container">
            <div className="sort_by_wrapper">
                <p>Sort By:</p>
                <div className="sort_by_flex" />
                <div className="inputs">
                    <input type="text" placeholder="Guest Rating" />
                    <input type="text" placeholder="Name" />
                    <input type="text" placeholder="Price" />
                    <button type="submit" className="sort_submit_btn">Most Popular</button>
                </div>
                <div className="sort_by_flex" />
                <div className="icon_btn">
                    <button className="icons">
                        <i className="fa fa-th"></i>
                    </button>
                    <button className="icons" disabled>
                        <i className="fa fa-500px"></i>
                    </button>
                    <button className="icons">
                        <i className="fa fa-star"></i>
                    </button>
                </div>
            </div>
        </div>
    </section>
)

export default SortBy