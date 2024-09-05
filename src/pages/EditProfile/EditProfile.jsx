import React, {useEffect, useState} from 'react';
import Heading from "../../components/UI/Heading/Heading";
import './editProfile.css';
import Input from "../../components/UI/input/Input";
import InputEditProfile from "../../components/UI/input/InputEditProfile/InputEditProfile";
import Button from "../../components/UI/button/Button";
import {deleteProfile, profile, updateProfile} from "../../actions/user";
import {useNavigate} from "react-router-dom";
import ModalWindow from "../../components/UI/modalWindow/ModalWindow";

const EditProfile = () => {

    const [avatar, setAvatar] = useState('');
    const [originalProfile, setOriginalProfile] = useState({});
    const [nickname, setNickname] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    // const [currentPassword, setCurrentPassword] = useState('');
    // const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const profileInfo = await profile(localStorage.getItem("token"));
                setOriginalProfile(profileInfo);
                setNickname(profileInfo.nickname);
                setName(profileInfo.name);
                setSurname(profileInfo.surname);
                setAvatar(profileInfo.avatar);
                // setCurrentPassword(profileInfo.password);
            } catch (e) {
                alert(e);
            }
        }

        try{
            fetchProfile();
        } catch (e){
            alert(e);
        }
    }, [])

    const editProfile = async () => {
        const updatedFields = {};

        if (nickname !== originalProfile.nickname) updatedFields.nickname = nickname;
        if (name !== originalProfile.name) updatedFields.name = name;
        if (surname !== originalProfile.surname) updatedFields.surname = surname;

        if (Object.keys(updatedFields).length > 0) {
            try {
                await updateProfile(localStorage.getItem("token"), updatedFields);
                alert('Profile updated successfully');
                navigate('/profile');

            } catch (e) {
                alert('Error updating profile');
            }
        } else {
            alert('No changes detected');
        }
    }

    const deleteAccount = async () => {
        try {
            await deleteProfile(localStorage.getItem('token'));
            navigate('/login');
        } catch (e) {
            alert(e);
        }
    }

    return (
        <div className='edit-profile-wrapper'>
            <Heading>Edit profile</Heading>
            <div className='edit-profile-block'>
                <div className='edit-profile-avatar'>
                    <span className='edit-profile-span'>Avatar</span>
                    <img className='edit-profile-image' src={avatar} alt='#'/>
                </div>
                <div className='edit-profile-nickname'>
                    <span className='edit-profile-span'>Nickname</span>
                    <InputEditProfile placeholder='Nickname' value={nickname} setValue={setNickname}/>
                </div>
                <div className='edit-profile-name'>
                    <span className='edit-profile-span'>Name</span>
                    <InputEditProfile placeholder='Name' value={name || ""} setValue={setName}/>
                </div>
                <div className='edit-profile-surname'>
                    <span className='edit-profile-span'>Surname</span>
                    <InputEditProfile placeholder='Surname' value={surname || ""} setValue={setSurname}/>
                </div>
                {/*<div className='edit-profile-cur-password'>*/}
                {/*    <span>Current Password</span>*/}
                {/*    <InputEditProfile placeholder='Current Password'/>*/}
                {/*</div>*/}
                {/*<div className='edit-profile-new-password'>*/}
                {/*    <span>New Password</span>*/}
                {/*    <InputEditProfile placeholder='New Password'/>*/}
                {/*</div>*/}
                <div className='edit-profile-btns-block'>
                    <Button onClick = {() => editProfile()}>Edit Profile</Button>
                    <Button onClick ={() => setModalVisible(true)}>Delete Profile</Button>
                </div>
                {modalVisible && (
                    <ModalWindow
                        heading='Delete account?'
                        acceptFunc={deleteAccount}
                        rejectFunc={() => setModalVisible(false)}
                    />
                )}
            </div>
        </div>
    );
};

export default EditProfile;