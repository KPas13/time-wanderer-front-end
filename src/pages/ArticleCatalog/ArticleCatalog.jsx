import React, {useEffect, useState} from 'react';
import './articleCatalog.css';
import SearchBarCatalog from "../../components/UI/input/SearchBarCatalogPages/SearchBarCatalog";
import SelectorCatalog from "../../components/UI/selector/SelectorCatalog/SelectorCatalog";
import CircleImage from "../../components/UI/image/circleImage/CircleImage";
import CircleBigImage from "../../components/UI/image/circleImage/CircleBigImage/CircleBigImage";
import CategoryArticleGrid from "../../components/CatagoryGrid/CategoryArticleGrid/CategoryArticleGrid";
import ArticleBlock from "../../components/ArticleBlock/ArticleBlock";
import {articles} from "../../actions/articles";

const ArticleCatalog = () => {

    const [imageSrc, setImageSrc] = useState('');
    const [articleArray, setArticleArray] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const articleInfo = await articles();
            setArticleArray(articleInfo);
        }

        try{
            fetchData();
        } catch (e) {
            alert(e);
        }
    }, []);

    return (
        <div className='article-catalog-wrapper'>
            <div className='article-catalog-search-select'>
                <SearchBarCatalog placeholder='Find article or author' />
                <SelectorCatalog value='Choose category'/>
            </div>
            <div className='aritcle-catalog-grid'>
                <CategoryArticleGrid />
            </div>
            <div className='article-catalog-authors-block'>
                <CircleImage src='/assets/images/odesa.png' alt='Author' nickname='IVY_SPOWLESS'  />
                <CircleImage src='/assets/images/odesa.png' alt='Author' nickname='DARK_SHOOT' />
                <CircleBigImage className='article-catalog-big-image' src='/assets/images/lviv.jpg' alt='Author' nickname='ERKAIL_RENE' />
                <CircleImage src='/assets/images/odesa.png' alt='Author' nickname='ARVEIL_MORGAN' />
                <CircleImage src='/assets/images/odesa.png' alt='Author' nickname='VALET_IKE' />
            </div>
            <div className='article-catalog-divider'></div>
            <div className='articles-category-list'>
                {articleArray.map(article => (
                    <ArticleBlock
                        key={article._id}
                        src='/assets/images/derzhprom.jpg'
                        heading={article.title}
                        location={article.city}
                        description={article.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArticleCatalog;