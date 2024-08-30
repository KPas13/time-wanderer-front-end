import React, {useEffect} from 'react';
import './routeCatalog.css';
import SearchBarCatalog from "../../components/UI/input/SearchBarCatalogPages/SearchBarCatalog";
import SelectorCatalog from "../../components/UI/selector/SelectorCatalog/SelectorCatalog";
import CategoryRouteGrid from "../../components/CatagoryGrid/CategoryRouteGrid/CategoryRouteGrid";
import RouteBlock from "../../components/RouteBlock/RouteBlock";
import {roads} from "../../actions/roads";


const RouteCatalog = () => {

    const [roadsArray, setRoadsArray] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const roadsInfo = await roads();
            setRoadsArray(roadsInfo);
        }
        try {
            fetchData();
        } catch (e) {
            alert(e);
        }
    }, [])

    return (
        <div className='route-catalog-wrapper'>
            <div className='route-catalog-search-select'>
                <SearchBarCatalog placeholder='Find your way'/>
                <SelectorCatalog value='Choose category'/>
            </div>
            <div className='route-catalog-grid'>
                <CategoryRouteGrid/>
            </div>
            <div className='route-catalog-divider'></div>
            <div className='routes-catalog-list'>
                {roadsArray.map(road => (
                    <RouteBlock key={road._id} src='/assets/images/odesa.png' heading={road.name} description={road.description} highlights={road.highlights} />
                ))}
                <RouteBlock src='/assets/images/odesa.png'
                            heading='Odessa and the Black Sea Coast'
                            description='Visit the vibrant port city of Odessa with its stunning architecture, lively beaches, and rich maritime history.'
                            highlights={['Odessa Opera House', 'Potemkin Stairs', 'Arcadia Beach', 'Bilhorod-Dnistrovskyi Fortress']}></RouteBlock>
                <RouteBlock src='/assets/images/WesternUkraine.jpg'
                            heading='Western Ukraine and the Carpathians'
                            description='Experience the charm of Lviv’s medieval architecture, and the natural beauty of the Carpathian Mountains, known for hiking, skiing, and traditional Hutsul culture.'
                            highlights={['Lviv', 'Carpathian Mountains', 'Yaremche', 'Bukovel']}></RouteBlock>
                <RouteBlock src='/assets/images/Kharkiv2.jpg'
                            heading='Kharkiv Tourist Route: Discovering Sarsky Yar'
                            description='This route provides a comprehensive and enjoyable experience of Kharkiv, combining cultural, historical, and natural attractions.'
                            highlights={['Freedom Square', 'Shevchenko Park', 'Assumption Cathedral', 'Sarsky Yar']}></RouteBlock>
            </div>
        </div>
    );
};

export default RouteCatalog;