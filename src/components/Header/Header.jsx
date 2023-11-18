import React from 'react';
import classes from "./Header.module.css"

import { Link } from 'react-router-dom';

const Header = (elements, button) => {
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
          <li><a href="#s4">содержание</a></li>
          <li><a href="#s5">курсы</a></li>
          <li><a href="#s6">о нас</a></li>
          <li><a href="mailto:saladware46@gmail.com">обратная связь</a></li>
        </ul>
      </nav>
      <div id={classes.auth}>
        <Link to="/login">войти</Link>
      </div>
    </header>
  );
}

export default Header;
