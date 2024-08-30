import React from 'react';
import './inputEditProfile.css';

const InputEditProfile = (props) => {
    return (
        <div className='input-edit-profile-wrapper'>
            <input className='input-edit-profile' type={props.type} placeholder={props.placeholder} value={props.value} onChange={(event)=>props.setValue(event.target.value)}/>
        </div>
    );
};

export default InputEditProfile;