import React from 'react';
import './profileImage.css';

const ProfileImage = (props) => {
    return (
        <div className="profileImage">
            <div className='image-wrapper'>
                <div className='gradient-image'>
                    <img className='profile-picture-img' src={props.src} alt=""/>
                    <div className='profile-image-level'>
                        <span className='profile-level'>{props.level}</span>
                    </div>
                </div>
                <div className="profile-image-frame"></div>
            </div>
            <div className='profile-nickname'>{props.nickname}</div>
        </div>
    );
};

export default ProfileImage;