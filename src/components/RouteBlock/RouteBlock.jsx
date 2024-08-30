import React from 'react';
import Image from "../UI/image/Image";
import Highlight from "../UI/highlight/Highlight";
import Button from "../UI/button/Button";
import './routeBlock.css';

const RouteBlock = (props) => {
    return (
        <div className='route-wrapper'>
            <div className='route-block-wrapper'>
                <Image src={props.src}/>
                <div className='route-info'>
                    <h3 className='route-h3'>{props.heading}</h3>
                    <p className='route-p'>{props.description}</p>
                    <span className='route-highlight'>Highlights:</span>
                    {props.highlights.slice(0, 4).map(highlight => (
                        <Highlight key={highlight._id}>{highlight.name}</Highlight>
                    ))}
                    <Button onClick={props.redirect}>View more</Button>
                </div>
            </div>
        </div>
    );
};

export default RouteBlock;