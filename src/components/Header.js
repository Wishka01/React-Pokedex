import React from 'react';
import '../styles/Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-img_container">
                <a href="">
                    <img 
                    src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" 
                    alt="logo-img" 
                    className="logo-img" />
                </a>
            </div>
        </div>
    );
}

export default Header;