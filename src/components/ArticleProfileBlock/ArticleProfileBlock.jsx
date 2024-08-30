import React, { useState, useEffect } from 'react';
import './articleProfileBlock.css';
import SearchBar from "../UI/input/SearchBar/SearchBar";
import ArticleBlock from "../ArticleBlock/ArticleBlock";

// Тестовые данные
const testArticles = [
    {
        id: 1,
        src: '/assets/images/derzhprom.jpg',
        heading: 'The Derzhprom Building in Kharkiv',
        location: 'Kharkiv',
        description: 'The Derzhprom (State Industry Building) in Kharkiv, Ukraine, stands as a monumental example of Soviet Constructivist architecture and remains a symbol of industrial progress and modernist design. Completed in 1928, this iconic structure was once the tallest building in the Soviet Union and Europe...'
    },
    {
        id: 2,
        src: '/assets/images/derzhprom.jpg',
        heading: 'Another Famous Building',
        location: 'Kyiv',
        description: 'This is a description of another famous building in Kyiv. It showcases unique architectural features and has a rich history dating back to...'
    },
    // Добавьте больше тестовых статей по необходимости
];

const ArticleProfileBlock = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchArticles();
    }, []);

    const fetchArticles = async () => {
        // В реальном приложении здесь был бы запрос к API
        // Для демонстрации используем setTimeout, чтобы имитировать асинхронный запрос
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация задержки сети
            setArticles(testArticles);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch articles');
            setLoading(false);
        }
    };

    return (
        <div className='article-profile-block-wrapper'>
            <div className='article-profile-block-search'>
                <SearchBar placeholder='Find article' />
            </div>
            <div className='article-profile-block-info'>
                {loading ? (
                    <div>Loading articles...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    articles.map(article => (
                        <ArticleBlock
                            key={article.id}
                            src={article.src}
                            heading={article.heading}
                            location={article.location}
                            description={article.description}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ArticleProfileBlock;