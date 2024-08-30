import React from 'react';
import './categoryPlaceGrid.css';
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
                        <LongVerticalGridElement src='/assets/images/Europe.jpg' title='Europe'/>
                    </div>
                    <div className='category-grid-first-row'>
                        <div className='category-grid-long-horizontal-element'>
                            <LongHorizontalGridElement src='/assets/images/Ukraine.jpg' title='Ukraine'/>
                        </div>
                        <div className='category-grid-two-short-horizontal-element'>
                            <ShortVerticalGridElement src='/assets/images/Asia.jpg' title='Asia'/>
                            <ShortVerticalGridElement src='/assets/images/Cherkasy.jpg' title='Cherkasy'/>
                        </div>
                    </div>
                    <div className='category-grid-long-vertical-element-end'>
                        <LongVerticalGridElement src='/assets/images/Kharkiv.jpg' title='Kharkiv'/>
                    </div>
                </div>
                <div className='category-grid-second-row'>
                    <ShortVerticalGridElement src='/assets/images/Japan.jpg' title='Japan'/>
                    <MiddleHorizontalGridElement src='/assets/images/Rome.jpg' title='7 wonders of the world' />
                    <ShortVerticalGridElement src='/assets/images/Ireland.jpg' title='Ireland'/>
                </div>
            </div>
        </div>
    );
};

export default CategoryPlaceGrid;