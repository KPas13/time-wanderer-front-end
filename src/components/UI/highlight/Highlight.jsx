import React from 'react';
import './highlight.css';

const Highlight = (props) => {
    return (
        <div className='highlight-wrapper'>
            <img src='/assets/images/geo-marker.svg' alt="" className='highlight-icon'/>
            <span className='highlight-text'>{props.children}</span>
        </div>
    );
};

export default Highlight;