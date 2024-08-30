import React, {useEffect} from 'react';
import './placeCatalog.css';
import SearchBarCatalog from "../../components/UI/input/SearchBarCatalogPages/SearchBarCatalog";
import SelectorCatalog from "../../components/UI/selector/SelectorCatalog/SelectorCatalog";
import CategoryPlaceGrid from "../../components/CatagoryGrid/CategoryPlaceGrid/CategoryPlaceGrid";
import PlaceBlock from "../../components/PlaceBlock/PlaceBlock";
import {places} from "../../actions/places";

const PlaceCatalog = () => {

    const [placesArray, setPlacesArray] = React.useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const placesInfo = await places();
            setPlacesArray(placesInfo);
        }

        try{
            fetchData();
        } catch (e) {
            alert(e);
        }
    }, []);

    return (
        <div className='place-catalog-wrapper'>
            <div className='place-catalog-search-selector'>
                <SearchBarCatalog placeholder='Find place' />
                <SelectorCatalog value='Choose category'/>
            </div>
            <div className='place-catalog-grid'>
                <CategoryPlaceGrid />
            </div>
            <div className='place-catalog-divider'></div>
            {placesArray.map(place => (
                <PlaceBlock
                    key={place._id}
                    src='/assets/images/odesa.png'
                    heading={place.name}
                    location={place.city}
                    description={place.description}
                />
            ))}
        </div>
    );
};

export default PlaceCatalog;