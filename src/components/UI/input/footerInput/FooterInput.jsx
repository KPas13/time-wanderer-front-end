import React from 'react';
import './footerInput.css';

const FooterInput = (props) => {
    return (
        <div className="footerInput">
            <input className='footer-input' placeholder={props.placeholder}  />
            <button className='footer-input-btn'><img src='/assets/images/arrow-left.svg' alt='#'/></button>
        </div>
    );
};

export default FooterInput;