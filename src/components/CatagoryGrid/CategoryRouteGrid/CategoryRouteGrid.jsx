import React from 'react';
import './categoryRouteGrid.css';
import LongVerticalGridElement
    from "../../UI/catagoryGridElements/VerticalElements/longVerticalGridElement/LongVerticalGridElement";
import LongHorizontalGridElement
    from "../../UI/catagoryGridElements/HorizontalElements/longHorizontalGridElement/LongHorizontalGridElement";
import ShortVerticalGridElement
    from "../../UI/catagoryGridElements/HorizontalElements/shortHorizontalGridElement/ShortVerticalGridElement";
import MiddleHorizontalGridElement
    from "../../UI/catagoryGridElements/middleHorizontalGridElement/MiddleHorizontalGridElement";

const CategoryPlaceGrid = () => {
    return (
        <div className='category-grid-wrapper'>
            <div className='category-grid'>
                <div className='category-grid-start-row'>
                    <div className='category-grid-long-vertical-element'>
                        <LongVerticalGridElement src='/assets/images/London.jpg' title='London'/>
                    </div>
                    <div className='category-grid-first-row'>
                        <div className='category-grid-long-horizontal-element'>
                            <LongHorizontalGridElement src='/assets/images/Kyiv.jpg' title='Kyiv'/>
                        </div>
                        <div className='category-grid-two-short-horizontal-element'>
                            <ShortVerticalGridElement src='/assets/images/Katowice.jpg' title='Katowice'/>
                            <ShortVerticalGridElement src='/assets/images/Cherkasy.jpg' title='Cherkasy'/>
                        </div>
                    </div>
                    <div className='category-grid-long-vertical-element-end'>
                        <LongVerticalGridElement src='/assets/images/Kharkiv.jpg' title='Kharkiv'/>
                    </div>
                </div>
                <div className='category-grid-second-row'>
                    <ShortVerticalGridElement src='/assets/images/Tokyo.jpg' title='Tokyo'/>
                    <MiddleHorizontalGridElement src='/assets/images/Rome.jpg' title='Rome' />
                    <ShortVerticalGridElement src='/assets/images/Dublin.jpg' title='Dublin'/>
                </div>
            </div>
        </div>
    );
};

export default CategoryPlaceGrid;