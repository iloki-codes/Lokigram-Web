import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';
import Burger from './Burger.menu.js';

const Header = () => {

    return (
        <div className="header bg-emerald-800 fixed top-0">
                        <Burger />
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle">

                <Link to="/" className="logo">
                    <h1 className="navbar-brand text-uppercase p-0 m-0"
                    onClick={() => window.scrollTo({top: 0})}>
                        V-Network
                    </h1>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header;