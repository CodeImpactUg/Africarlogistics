import React from 'react';

import './PrevNext.css'

const PrevNext = props => (
    <section className="prev_next">
        <div className="prev_next_lg">
            <button className="prev">
                <i className="fa fa-arrow-left"></i>
                Prev Post
            </button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button className="next">
                Next Post
                <i className="fa fa-arrow-right"></i>
            </button>
        </div>
        <div className="prev_next_sm">
            <button className="prev_sm">
                <i className="fa fa-angle-left"></i>
            </button>
            <button className="next_sm">
                <i className="fa fa-angle-right"></i>
            </button>
        </div>
    </section>
)

export default PrevNext