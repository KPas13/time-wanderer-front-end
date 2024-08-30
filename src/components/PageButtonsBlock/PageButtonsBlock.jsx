import React from 'react';
import './pageButtonsBlock.css';
import PageButton from "../UI/button/pageButton/PageButton";

const PageButtonsBlock = (props) => {
    return (
        <div className='page-buttons-block-wrapper'>
            {props.pages.slice(0, 3).map(page => (
                <PageButton>{page}</PageButton>
            ))}
            <PageButton>...</PageButton>
        </div>
    );
};

export default PageButtonsBlock;