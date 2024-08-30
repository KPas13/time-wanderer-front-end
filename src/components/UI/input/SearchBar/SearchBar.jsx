import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
    return (
        <div className='search-bar-wrapper'>
            <div className='search-bar'>
                <input
                    type='text'
                    className='search-bar-input'
                    placeholder={props.placeholder}
                />
                <img src='/assets/images/search-icon.svg' alt='Search' className='search-bar-img'/>
            </div>
        </div>
    );
};

export default SearchBar;
