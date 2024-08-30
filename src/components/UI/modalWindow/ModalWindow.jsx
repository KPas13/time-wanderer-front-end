import React from 'react';
import './modalWindow.css';
import Button from "../button/Button";

const ModalWindow = (props) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2 className='modal-content-title'>{props.heading}</h2>
                <div className='modal-buttons'>
                    <Button onClick={props.acceptFunc}>Yes</Button>
                    <Button onClick={props.rejectFunc}>No</Button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;