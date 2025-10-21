import React from 'react';
import Banner from '../Banner/Banner';
import WorksProcess from '../WorksProcess/WorksProcess';
import Services from '../Services/Services';
import ClientLogos from '../ClientLogos/ClientLogos';



const Home = () => {
    return (
        <>
            <Banner />
            <WorksProcess />
            <Services/>
            <ClientLogos />
        </>
    );
};

export default Home;