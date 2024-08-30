import React from 'react';
import './pageButton.css';

const PageButton = (props) => {
    return (
        <button onClick={props.direct} className='pageButton'>{props.children}</button>
    );
};

export default PageButton;