import React from 'react';
import classes from "./Header.module.css"

const Header = () => {
    return (
        <header>
            <div id="logo">
                <img src="" alt=""/>
                <span>nom</span>
            </div>
            <nav>
                <ul>
                    <li><a href="">курсы</a></li>
                    <li><a href="">преимущества</a></li>
                    <li><a href="">особенности</a></li>
                    <li><a href="">о нас</a></li>
                    <li><a href="">обратная связь</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
