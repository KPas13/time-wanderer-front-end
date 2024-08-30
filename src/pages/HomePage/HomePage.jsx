import React from 'react';
import Banner from "../../components/Banner/Banner";
import Heading from "../../components/UI/Heading/Heading";
import RouteBlock from "../../components/RouteBlock/RouteBlock";
import ArticleBlock from "../../components/ArticleBlock/ArticleBlock";

const HomePage = () => {
    return (
        <div className='main-page-wrapper'>
            <Banner/>
            <Heading>Popular Routes</Heading>
            <RouteBlock src='/assets/images/odesa.png'
                        heading='Odessa and the Black Sea Coast'
                        description='Visit the vibrant port city of Odessa with its stunning architecture, lively beaches, and rich maritime history.'
                        highlights={['Odessa Opera House', 'Potemkin Stairs', 'Arcadia Beach', 'Bilhorod-Dnistrovskyi Fortress']}></RouteBlock>
            <RouteBlock src='/assets/images/odesa.png'
                        heading='Odessa and the Black Sea Coast'
                        description='Visit the vibrant port city of Odessa with its stunning architecture, lively beaches, and rich maritime history.'
                        highlights={['Odessa Opera House', 'Potemkin Stairs', 'Arcadia Beach']}></RouteBlock>
            <Heading>Popular Articles</Heading>
            <ArticleBlock src='/assets/images/derzhprom.jpg'
                          heading='The Derzhprom Building in Kharkiv'
                          location='Kharkiv'
                          description='The Derzhprom (State Industry Building) in Kharkiv,
              Ukraine, stands as a monumental example of Soviet Constructivist architecture
              and remains a symbol of industrial progress and modernist design. Completed in 1928,
              this iconic structure was once the tallest building in the Soviet Union and Europe...' />
            <ArticleBlock src='/assets/images/derzhprom.jpg'
                          heading='The Derzhprom Building in Kharkiv'
                          location='Kharkiv'
                          description='The Derzhprom (State Industry Building) in Kharkiv,
              Ukraine, stands as a monumental example of Soviet Constructivist architecture
              and remains a symbol of industrial progress and modernist design. Completed in 1928,
              this iconic structure was once the tallest building in the Soviet Union and Europe...' />
        </div>
    );
};

export default HomePage;