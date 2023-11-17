import React from 'react';
import classes from "./Header.module.css"

const Header = () => {
  return (
    <header>

      <div id={classes.logo}>
        <a href="/home">
          <div>
            <img src="/logo.svg" alt="" />
            <span>Nom</span>
          </div>
        </a>
      </div>
      <nav>
        <ul>
          <li><a href="#s3">курсы</a></li>
          <li><a href="">преимущества</a></li>
          <li><a href="">особенности</a></li>
          <li><a href="">о нас</a></li>
          <li><a href="">обратная связь</a></li>
        </ul>
      </nav>
      <div id={classes.auth}>
        <a href="/login">войти</a>
      </div>
    </header>
  );
}

export default Header;
