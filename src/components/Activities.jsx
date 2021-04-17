import React from 'react';
import './../css/Activities.css';
import hiv from './../Icons/hiv.png';
import heart from './../Icons/heart.png';
import pressure from './../Icons/pressure.jpg';

const Activities = () => {
    return (
        <div className="activities">
            <div className="header">
                Recent Activity
            </div>
            <div className="ul">
                <div className="li">
                    <div className="image">
                        <img src={hiv} alt=""/>
                    </div>
                    <div className="activity">
                        <p>HIV Blood Draw Test</p>
                    </div>
                    <div className="status">
                        <p>A100</p>
                    </div>
                </div>

                <div className="li">
                    <div className="image">
                        <img src={heart} alt=""/>
                    </div>
                    <div className="activity">
                        <p>TB Radiology XRay</p>
                    </div>
                    <div className="status">
                        <p>A30</p>
                    </div>
                </div>

                <div className="li">
                    <div className="image">
                        <img src={pressure} alt=""/>
                    </div>
                    <div className="activity">
                        <p>Blood Pressure Check</p>
                    </div>
                    <div className="status">
                        <p>A10</p>
                    </div>
                </div>
            </div>
            <div className="header">
                
            </div>
        </div>
    );
}

export default Activities;
