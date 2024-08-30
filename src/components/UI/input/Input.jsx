import React from 'react';
import './input.css';

const Input = (props) => {

    return (
        <div className='input-wrapper'>
            <div className='input-box'>
                <input className='input' onChange={(event)=>props.setValue(event.target.value)} placeholder={props.placeholder} value={props.value} type={props.type} />
            </div>
        </div>
    );
};

export default Input;