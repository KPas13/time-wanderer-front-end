import React from 'react';
import './placeBlock.css';
import Highlight from "../UI/highlight/Highlight";
import Image from "../UI/image/Image";

const PlaceBlock = (props) => {
    return (
        <div className='place-block-wrapper'>
            <div className='place-block'>
                <div className='place-block-image'>
                   <Image src={props.src} alt='#' />
                </div>
                <div className='place-block-text'>
                    <h2 className='place-block-title'>{props.heading}</h2>
                    <Highlight>{props.location}</Highlight>
                    <p className='place-block-description'>{props.description}</p>
                </div>
            </div>
        </div>
    );
};

export default PlaceBlock;