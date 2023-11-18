import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
            <div id={classes.d1}>
                <ul id={classes.media}>
                    <li><a href="/" id={classes.logo}>
                        <img src="/logo.svg" alt="" />
                        <span>Nom</span>    
                    </a></li>
                    <li><a href="https://vk.com/salad37"><img src="/vk.svg" alt="" /></a></li>
                    <li><a href="mailto:saladware46@gmail.com"><img src="/gmail.svg" alt="" /></a></li>
                    <li><a href="https://t.me/saladware"><img src="/tg.svg" alt="" /></a></li>
                </ul>
                <div>
                    <h1 id={classes.phone}><a href="tel:+79675932427">+7 967 593 24 27</a></h1>
                </div>

            </div>
            <ul id={classes.d2}>
                <li>©Nom, 2023г.</li>
                <li><a href="/politica.html">Политика конфеденциальности</a></li>
                <li>Сотрудничество</li>
            </ul>
            </div>
            
        </footer>
    );
}

export default Footer;
