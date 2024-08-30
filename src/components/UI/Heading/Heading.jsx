import React from 'react';
import './heading.css';

const Heading = (props) => {
    return (
        <div className='heading-wrapper'>
            <h2 className='heading'>{props.children}</h2>
        </div>
    );
};

export default Heading;