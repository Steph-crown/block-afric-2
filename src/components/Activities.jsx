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
                    <div className="col">
                        <p>Date</p>
                    </div>
                    <div className="activity">
                        <p>Description</p>
                    </div>
                    <div className="status">
                        <p>Amount</p>
                    </div>
                </div>

                <div className="li">
                    <div className="col">
                        <p>1/1/21</p>
                    </div>
                    <div className="activity">
                        <p>Sent</p>
                    </div>
                    <div className="status">
                        <p>N100.00</p>
                    </div>
                </div>

                <div className="li">
                    <div className="col">
                        <p>2/2/21</p>
                    </div>
                    <div className="activity">
                        <p>Received</p>
                    </div>
                    <div className="status">
                        <p>N200.00</p>
                    </div>
                </div>

                <div className="li">
                    <div className="col">
                        <p>3/3/21</p>
                    </div>
                    <div className="activity">
                        <p>Sent</p>
                    </div>
                    <div className="status">
                        <p>N300.00</p>
                    </div>
                </div>
            </div>
            <div className="header">
                
            </div>
        </div>
    );
}

export default Activities;
