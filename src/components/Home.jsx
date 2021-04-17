import React from 'react';
import Banner from './Banner';
import CurrencyForm from "./CurrencyForm";
import Activities from './Activities';


const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <Banner />
            </div>
            <CurrencyForm />
            <Activities/>
        </div>
    );
}

export default Home;
