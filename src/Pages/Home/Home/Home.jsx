import React from 'react';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from './PopularInstructors/PopularInstructors';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Photograph Space | Home</title>
            </Helmet>


            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <FeaturesSection></FeaturesSection>

        </div>
    );
};

export default Home;