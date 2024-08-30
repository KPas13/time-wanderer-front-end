import React from 'react';
import './categoryArticleGrid.css';
import LongVerticalGridElement
    from "../../UI/catagoryGridElements/VerticalElements/longVerticalGridElement/LongVerticalGridElement";

const CategoryArticleGrid = () => {
    return (
        <div className='category-article-grid-wrapper'>
            <div className='category-article-grid'>
                <LongVerticalGridElement src='/assets/images/Cherkasy.jpg' title='Cherkasy' />
                <LongVerticalGridElement src='/assets/images/Ukraine.jpg' title='Ukraine' />
                <LongVerticalGridElement src='/assets/images/Kharkiv.jpg' title='Kharkiv' />
                <LongVerticalGridElement src='/assets/images/Japan.jpg' title='Japan' />
                <LongVerticalGridElement src='/assets/images/London.jpg' title='London' />
            </div>
        </div>
    );
};

export default CategoryArticleGrid;