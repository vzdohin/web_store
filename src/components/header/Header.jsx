'use client';

import './header.css';
import Image from 'next/image';
import Logo from '../../images/logo_header.svg'

const Header = () => {

    return (
        <header className='header'>
            <div className="container">
                <div className="header__row">
                    <div className="header__logo-container">
                        < Image
                            src={Logo}
                            alt='logo'
                        />
                        <p className="header__logo-text">FASHION</p>
                    </div>
                    <ul className="header__navigate">
                        <li className="header__link"><a href='#'>CATALOGUE</a></li>
                        <li className="header__link"><a href='#'>FASHION</a></li>
                        <li className="header__link"><a href='#'>FAVOURITE</a></li>
                        <li className="header__link"><a href='#'>LIFESTYLE</a></li>
                        <li className="header__link header__link_background"><a href='#'>SIGN UP</a></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;