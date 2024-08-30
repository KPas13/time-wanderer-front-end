import React, { useState, useEffect } from 'react';
import './routesProfileBlock.css';
import SearchBar from "../UI/input/SearchBar/SearchBar";
import RouteBlock from "../RouteBlock/RouteBlock";

// Тестовые данные
const testRoutes = [
    {
        id: 1,
        src: '/assets/images/odesa.png',
        heading: 'Odessa and the Black Sea Coast',
        description: 'Visit the vibrant port city of Odessa with its stunning architecture, lively beaches, and rich maritime history.',
        highlights: ['Odessa Opera House', 'Potemkin Stairs', 'Arcadia Beach', 'Bilhorod-Dnistrovskyi Fortress']
    },
    {
        id: 2,
        src: '/assets/images/lviv.jpg',
        heading: 'Lviv: The Cultural Capital',
        description: 'Explore the charming streets of Lviv, known for its coffee culture, historic architecture, and vibrant arts scene.',
        highlights: ['Rynok Square', 'Lviv Opera House', 'High Castle Park', 'Lychakiv Cemetery']
    },
];

const RoutesProfileBlock = () => {
    const [routes, setRoutes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRoutes();
    }, []);

    const fetchRoutes = async () => {
        // В реальном приложении здесь был бы запрос к API
        // Для демонстрации используем setTimeout, чтобы имитировать асинхронный запрос
        setLoading(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Имитация задержки сети
            setRoutes(testRoutes);
            setLoading(false);
        } catch (err) {
            setError('Failed to fetch routes');
            setLoading(false);
        }
    };

    return (
        <div className='routes-profile-block-wrapper'>
            <div className='routes-profile-block-search-bar'>
                <SearchBar placeholder='Find routes' />
            </div>
            <div className='routes-profile-block'>
                {loading ? (
                    <div>Loading routes...</div>
                ) : error ? (
                    <div>Error: {error}</div>
                ) : (
                    routes.map(route => (
                        <RouteBlock
                            key={route.id}
                            src={route.src}
                            heading={route.heading}
                            description={route.description}
                            highlights={route.highlights}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default RoutesProfileBlock;