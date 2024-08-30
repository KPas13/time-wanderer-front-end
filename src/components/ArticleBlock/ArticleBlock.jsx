import React from 'react';
import './articleBlock.css';
import Highlight from "../UI/highlight/Highlight";
import Button from "../UI/button/Button";

const ArticleBlock = (props) => {
    return (
        <div className='article-block-wrapper'>
            <div className='article-block'>
                <img src={props.src} alt='#' className='article-img'/>
                <div className='article-block-info'>
                    <h2 className='article-block-title'>{props.heading}</h2>
                    <Highlight>{props.location}</Highlight>
                    <p className='article-block-description'>{props.description}</p>
                    <Button>Read more</Button>
                </div>
            </div>
        </div>
    );
};

export default ArticleBlock;