import React, {useState} from 'react';
import './profilePage.css';
import ProfileImage from "../../components/UI/image/ProfileImage/ProfileImage";
import Button from "../../components/UI/button/Button";
import PointsBar from "../../components/UI/PointsBar/PointsBar";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import ArticleProfileBlock from "../../components/ArticleProfileBlock/ArticleProfileBlock";
import AchievementProfileBlock from "../../components/AchievementProfileBlock/AchievementProfileBlock";
import RoutesProfileBlock from "../../components/RoutesProfileBlock/RoutesProfileBlock";
import {useEffect} from "react";
import {profile} from "../../actions/user";

const ProfilePage = () => {

    const [activeSection, setActiveSection] = useState('Friends');
    const [nickname, setNickname] = useState('');
    const [level, setLevel] = useState(0);
    const [rate, setRate] = useState(0);


    useEffect(  () => {
        const fetchProfile = async () => {
            try {
                const profileInfo = await profile(localStorage.getItem("token"));
                setNickname(profileInfo.nickname);
                setLevel(profileInfo.level);
                setRate(profileInfo.rate);
                console.log(profileInfo.nickname, profileInfo.level, profileInfo.rate);
            } catch (e) {
                console.log(e);
            }
        };
        fetchProfile();
    },[]);

    const renderActiveSection = () => {
        switch(activeSection) {
            case 'Friends':
                return <FriendsBlock />;
            case 'Achievements':
                return <AchievementProfileBlock />;
            case 'Articles':
                return <ArticleProfileBlock />;
            case 'Routes':
                return <RoutesProfileBlock />;
            default:
                return null;
        }
    };

    const handleClick = (section) => (e) => {
        e.preventDefault();
        setActiveSection(section);
    };

    return (
        <div className='profile-page-wrapper'>
            <div className='profile-page-first-block'>
                <div className='profile-page-menu-image'>
                    <a
                        href="#"
                        className={`profile-menu-link ${activeSection === 'Friends' ? 'active' : ''}`}
                        onClick={handleClick('Friends')}
                    >
                        Friends
                    </a>
                    <div className='profile-page-first-block-text-img'>
                        <a
                            href="#"
                            className={`profile-menu-link ${activeSection === 'Achievements' ? 'active' : ''}`}
                            onClick={handleClick('Achievements')}
                        >
                            Achievements
                        </a>
                        <ProfileImage src='/assets/images/log-in-image.jpg' nickname={nickname} level={level}/>
                    </div>
                    <a
                        href="#"
                        className={`profile-menu-link ${activeSection === 'Articles' ? 'active' : ''}`}
                        onClick={handleClick('Articles')}
                    >
                        Articles
                    </a>
                    <a
                        href="#"
                        className={`profile-menu-link ${activeSection === 'Routes' ? 'active' : ''}`}
                        onClick={handleClick('Routes')}
                    >
                        Routes
                    </a>
                </div>
                <PointsBar className='profile-progress-bar' firstPoint={rate} maxPoints='1000'/>
                {/*<Button>ADD TO FRIENDS</Button>*/}
            </div>
            <div className='profile-page-divider'></div>
            <div className='profile-page-second-block'>
                {renderActiveSection()}
            </div>
        </div>
    );
};

export default ProfilePage;

