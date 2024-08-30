import React from 'react';
import './selectorCatalog.css';

const SelectorCatalog = (props) => {
    return (
        <div className='selector-catalog-wrapper'>
            <select className='selector-catalog-type'>
                <option className='selector-catalog-type-item' value={props.value}>{props.value}</option>
            </select>
        </div>
    );
};

export default SelectorCatalog;