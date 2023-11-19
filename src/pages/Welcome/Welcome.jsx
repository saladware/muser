import React from 'react';
import classes from "./Welcome.module.css"
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';
import Leaderboard from '../../components/Leaderboard/Leaderboard';
import { Link } from 'react-router-dom';


const Welcome = () => {
    return (
        <>
            <div className="container">
                <Header2 />
                <div id={classes.m}>
                    <div id={classes.d}>
                        <h1>с возвращением!</h1>

                        <p className='muted'>готовы продолжить обучение?</p>
                        <Link to="/main">
                            <button id={classes.b} className="btn-secondary">
                                продолжить обучение
                            </button>
                        </Link>

                    </div>
                    <Leaderboard />
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Welcome;
