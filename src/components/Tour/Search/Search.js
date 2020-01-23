import React from 'react';

import './Search.css'

const Search = props => (
    <section className="form">
        <form>
            <div className="label_input">
                <label>
                    Keyword
                </label>
                <input type="search" placeholder="Enter Keyword" />
            </div>
            <div className="label_input">
                <label>
                    Where
                </label>
                <input type="search" placeholder="Choose Place" />
            </div>
            <div className="label_input">
                <label>
                    Start Date
                </label>
                <input type="text" placeholder="dd/mm/yyyy" />
            </div>
            <button type="submit" className="submit_btn">Search</button>
        </form>
    </section>
)


export default Search