import React from 'react';
import './longHorizontalGridElement.css';

const LongHorizontalGridElement = (props) => {
    return (
        <div className='long-horizontal-element-wrapper'>
            <div className='long-horizontal-element-gradient-image'>
                <div className='long-horizontal-element-grad'></div>
                <img className='long-horizontal-element-image' src={props.src} alt="#"/>
                <div className='long-horizontal-element-text-wrapper'>
                    <span className='long-horizontal-element-text'>{props.title}</span>
                </div>
            </div>
        </div>
    );
};

export default LongHorizontalGridElement;