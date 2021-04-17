import React from 'react';
import {ReactComponent as HeaderLogo} from './../Icons/header-logo.svg';
import './../css/Header.css'

const Header = () => {
    return (
        <header>
            <div className="left">
                <HeaderLogo className="header-logo" />
                <h1>ribbon</h1>
            </div>
            <div className="right">
                <i className='fas fa-user-circle'></i>
                <i className="fa fa-bell"></i>
            </div>
        </header>
    );
}

export default Header;
