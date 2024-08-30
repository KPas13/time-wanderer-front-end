import React, { useState, useEffect } from 'react';
import './pointsBar.css';

const PointsBar = (props) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (props.maxPoints > 0) {
            setProgress((props.firstPoint / props.maxPoints) * 100);
        }
    }, [props.firstPoint, props.maxPoints]);

    return (
        <div className='points-bar-wrapper'>
            <div className='points-bar'>
                <div className='points-bar-fill' style={{ width: `${progress}%` }}></div>
                <span className='text-points'>
                    {props.firstPoint}/{props.maxPoints}
                </span>
            </div>
        </div>
    );
};

export default PointsBar;
