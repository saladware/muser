import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import classes from "./Join.module.css"

const Join = () => {
    return (
        <>
            <div className="container">
                <Header />
                <div className={classes.card}>
                    <h1>регистрация на курс</h1>
                    <form action="">
                        <div className={classes.field}>
                            <span>имя</span>
                            <input type="text" name="name" id="" />

                        </div>
                        <div className={classes.field}>
                            <span>фамилия</span>
                            <input type="text" name="surename" id="" />
                        </div>
                        <div className={classes.field}>
                            <span>email</span>
                            <input type="text" name="" id="" />
                        </div>
                        <div className={classes.field}>
                            <span>пароль</span>
                            <input  type="password" name="" id="" />
                        </div>
                        <div id={classes.ss}>
                            <div>
                                <span>пол</span>
                            </div>

                            <div id={classes.bb}>
                                <div>
                                    <input type="radio" name="sex" id="man" />
                                    <label htmlFor="man">Мужcкой</label>
                                </div>
                                <div>
                                    <input type="radio" name="sex" id="woman" />
                                    <label htmlFor="woman">Женский</label>
                                </div>
                            </div>
                        </div>

                        
                        
                        <div id={classes.s}>
                            <button className={classes.auth} type="submit">записаться</button>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Join;