import React from 'react';
import classes from "./Header2.module.css"

import { Link } from 'react-router-dom';

const Header2 = (elements, button) => {
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
          <li><a href="">главная</a></li>
          <li><a href="">курсы</a></li>
          <li><a href="">поддержка</a></li>
          <li><a href="mailto:saladware46@gmail.com">обратная связь</a></li>
        </ul>
      </nav>
      <div>
        <Link to="/profile"><img  style={{"height": "1.5rem"}} src="/profile.svg" alt="" /></Link>
      </div>
    </header>
  );
}

export default Header2;
