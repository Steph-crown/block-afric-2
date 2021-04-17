import React from 'react';
import './../css/Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <div className="afya">
                <div className="circle">
                    AFYA
                </div>
                <h2>143.00</h2>
                <h6>Balance</h6>
            </div>
            <div className="zar">
                <div className="circle">
                    ZAR
                </div>
                <h2>R21.00</h2>
                <h6>Equivalent</h6>
            </div>
        </div>
    );
}

export default Banner;
