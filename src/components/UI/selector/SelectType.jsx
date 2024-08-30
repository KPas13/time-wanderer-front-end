import React from 'react';
import './selectType.css';

const SelectType = (props) => {
    return (
        <div className='select-type-container'>
            <select className='select-type'>
                <option className='select-type-option' value={props.value}>{props.value}</option>
            </select>
            {/*<img src='/assets/images/select-arrow.svg' alt='#' />*/}
        </div>
    );
};

export default SelectType;