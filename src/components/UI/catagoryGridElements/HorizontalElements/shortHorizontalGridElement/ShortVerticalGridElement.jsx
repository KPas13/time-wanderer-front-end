import React from 'react';
import './shortVerticalGridElement.css';

const ShortVerticalGridElement = (props) => {
    return (
        <div className='short-horizontal-grid-wrapper'>
            <div className='short-horizontal-gradient-image'>
                <div className='short-horizontal-gradient'></div>
                <img className='short-horizontal-image' src={props.src} alt="#"/>
                <div className='short-horizontal-text-wrapper'>
                    <span className='short-element-vertical-text'>{props.title}</span>
                </div>
            </div>
        </div>
    );
};

export default ShortVerticalGridElement;