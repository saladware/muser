import React from 'react';
import classes from "./Welcome.module.css"
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Leaderboard from '../../components/Leaderboard/Leaderboard';



const Welcome = () => {
    return (
        <>
            <div className="container">
                <Header />
                <main id={classes.m}>
                    <div id={classes.d}>
                        <h1>с возвращением!</h1>

                        <p className='muted'>готовы продолжить обучение?</p>
                        <button id={classes.b} className="btn-secondary">
                            продолжить обучение
                        </button>
                    </div>
                    <Leaderboard />
                </main>
            </div>
            <Footer />
        </>

    );
}

export default Welcome;
