import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.js';
import Search from './Search.js';
import Burger from './Burger.menu.js';
import loki from '../../assets/loki.png';

const Header = () => {

    return (

        <div className="header">

            <Burger />

            <nav className="navbar navbar-expand-lg bg-opacity-40 backdrop-blur-xl justify-content-between align-middle bg-[#f7e7ce]">

                <Link
                    to="/"
                    onClick={() => window.scrollTo({top: 0})}
                    className='flex flex-row gap-4 m-2 !no-underline'>
                    <img src={loki} alt={loki} className='h-10 w-5'/>
                    <span className="text-4xl font-bold text-[#b76e79]">lokigram</span>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header;