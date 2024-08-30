import React, { useState, useEffect } from 'react';
import SearchBar from "../UI/input/SearchBar/SearchBar";
import './friendsBlock.css';
import ProfileImage from "../UI/image/ProfileImage/ProfileImage";

const testFriends = [
    { id: 1, src: '/assets/images/sign-up-image.jpg', nickname: 'John_Doe', level: '15' },
    { id: 2, src: '/assets/images/sign-up-image.jpg', nickname: 'Jane_Smith', level: '20' },
    { id: 3, src: '/assets/images/sign-up-image.jpg', nickname: 'Mike_Johnson', level: '18' },
    { id: 4, src: '/assets/images/sign-up-image.jpg', nickname: 'Emily_Brown', level: '22' },
    { id: 5, src: '/assets/images/sign-up-image.jpg', nickname: 'Alex_Wilson', level: '17' },
    { id: 6, src: '/assets/images/sign-up-image.jpg', nickname: 'Sarah_Lee', level: '25' },

];

const FriendsBlock = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [activeSection, setActiveSection] = useState('friendsList');

    // useEffect(() => {
    //     fetchFriends();
    // }, []);

    // const fetchFriends = async () => {
    //     try {
    //         setLoading(true);
    //         const response = await fetch('https://your-api-url.com/friends');
    //         if (!response.ok) {
    //             throw new Error('Failed to load friends list');
    //         }
    //         const data = await response.json();
    //         setFriends(data);
    //         setLoading(false);
    //     } catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    // };

    // Тестовый массив друзей


    // return (
    //     <div className='friends-block-wrapper'>
    //         <div className='friend-block-navigation'>
    //             <a className='friend-list-link' href='#'>Friends List</a>
    //             <a className='friend-list-link' href='#'>Friend requests</a>
    //             <SearchBar placeholder='Find friend'/>
    //         </div>
    //         {loading ? (
    //             <div>Loading...</div>
    //         ) : error ? (
    //             <div>Error: {error}</div>
    //         ) : (
    //             <div className='friend-block-lists'>
    //                 {friends.map((friend) => (
    //                     <div key={friend.id} className='friend-block-profile-image-wrapper'>
    //                         <ProfileImage
    //                             className='friend-block-profile-image'
    //                             src={friend.src}
    //                             nickname={friend.nickname}
    //                             level={friend.level}
    //                         />
    //                     </div>
    //                 ))}
    //             </div>
    //         )}
    //     </div>
    // );

    return (
        <div className='friends-block-wrapper'>
            <div className='friend-block-navigation'>
                <a
                    className={`friend-list-link ${activeSection === 'friendsList' ? 'active' : ''}`}
                    href='#'
                    onClick={() => setActiveSection('friendsList')}
                >
                    Friends List
                </a>
                <a
                    className={`friend-list-link ${activeSection === 'friendRequests' ? 'active' : ''}`}
                    href='#'
                    onClick={() => setActiveSection('friendRequests')}
                >
                    Friend requests
                </a>
                <SearchBar placeholder='Find friend'/>
            </div>
            {activeSection === 'friendsList' && (
                <div className='friend-block-lists'>
                    {testFriends.map((friend) => (
                        <div key={friend.id} className='friend-block-profile-image-wrapper'>
                            <ProfileImage
                                className='friend-block-profile-image'
                                src={friend.src}
                                nickname={friend.nickname}
                                level={friend.level}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FriendsBlock;