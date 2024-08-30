import React from 'react';
import './middleHorizontalGridElement.css';

const MiddleHorizontalGridElement = (props) => {
    return (
        <div className='middle-horizontal-element-wrapper'>
            <div className='middle-horizontal-element-grad-image'>
                <div className='middle-horizontal-element-grad'></div>
                <img className='middle-horizontal-element-image' src={props.src} alt="#"/>
                <div className='middle-horizontal-element-text-wrapper'>
                    <span className='middle-horizontal-element-text'>{props.title}</span>
                </div>
            </div>
        </div>
    );
};

export default MiddleHorizontalGridElement;