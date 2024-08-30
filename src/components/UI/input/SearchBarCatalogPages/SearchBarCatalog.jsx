import React from 'react';
import './searchBarCatalog.css';

const SearchBarCatalog = (props) => {
    return (
        <div className='search-bar-catalog-wrapper'>
            <div className='search-bar-catalog'>
                <input
                    type='text'
                    className='search-bar-catalog-input'
                    placeholder={props.placeholder}
                />
                <img src='/assets/images/search-icon.svg' alt='Search' className='search-bar-catalog-img'/>
            </div>
        </div>
    );
};

export default SearchBarCatalog;