import React from 'react';
import './button.css';

const Button = (props) => {
    return (
        <div>
            <button className='classic-btn' onClick={props.onClick}>{props.children}</button>
        </div>
    );
};

export default Button;