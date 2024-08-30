import React from 'react';
import './longHorizontalGridElement.css';

const LongVerticalGridElement = (props) => {
    return (
        <div className='long-element-vertical-wrapper'>
            <div className='long-element-vertical-gradient-image'>
                <div className='long-element-vertical-gradient'></div>
                <img className='long-element-vertical-image' src={props.src} alt="#"/>
                <div className='long-element-vertical-text-wrapper'>
                    <span className='long-element-vertical-text'>{props.title}</span>
                </div>
            </div>
        </div>
    );
};

export default LongVerticalGridElement;
