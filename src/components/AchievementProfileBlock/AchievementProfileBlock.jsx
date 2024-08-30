import React from 'react';
import './achievementProfileBlock.css';
import AchievementBlock from "../UI/achievementBlock/AchievementBlock";
import SearchBar from "../UI/input/SearchBar/SearchBar";
import SelectType from "../UI/selector/SelectType";

const AchievementProfileBlock = () => {
    return (
        <div className='achievement-profile-block-wrapper'>
            <div className='achievement-profile-block-search'>
                <SearchBar placeholder='Find achivement' />
                <SelectType value='Choose type'/>
            </div>
            <div className='achievement-profile-block-info'>
                <AchievementBlock src='/assets/images/lviv.jpg'
                                  title='Odessa and the Black Sea Coast'
                                  description='Complete route Odessa and the Black Sea Coast '/>
                <AchievementBlock src='/assets/images/lviv.jpg'
                                  title='Odessa and the Black Sea Coast'
                                  description='Complete route Odessa and the Black Sea Coast '/>
                <AchievementBlock src='/assets/images/lviv.jpg'
                                  title='Odessa and the Black Sea Coast'
                                  description='Complete route Odessa and the Black Sea Coast '/>
                <AchievementBlock src='/assets/images/lviv.jpg'
                                  title='Odessa and the Black Sea Coast'
                                  description='Complete route Odessa and the Black Sea Coast '/>
                <AchievementBlock src='/assets/images/lviv.jpg'
                                  title='Odessa and the Black Sea Coast'
                                  description='Complete route Odessa and the Black Sea Coast '/>

            </div>

        </div>
    );
};

export default AchievementProfileBlock;