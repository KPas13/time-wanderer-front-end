import React from 'react';
import './leaderboardPage.css';
import Heading from "../../components/UI/Heading/Heading";
import GoldCircleImage from "../../components/UI/image/circleLeaderboardImage/GoldCircleImage/GoldCircleImage";

const LeaderboardPage = () => {
    return (
        <div className="leaderboard-page-wrapper">
            <div className='leaderboard-page-title'>
                <span>Leaderboard</span>
            </div>
            <div className='leaderboard-circle-top-three'>
                <GoldCircleImage src='/assets/images/Kolt.jpg' nickname='DARK_SHOOT' points='77000' alt='#' />
            </div>
        </div>
    );
};

export default LeaderboardPage;