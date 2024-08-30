import React from 'react';
import './image.css';

const Image = (props) => {
    return (
        <div className="wrapper">
            <div className='grad-img'>
                <div className='gradient'></div>
                <img className='img' src={props.src} alt=""/>
            </div>
            <div className="frame"></div>
        </div>
    );
};

export default Image;