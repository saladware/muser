import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import classes from "./Login.module.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className="container">
                <Header />
                <div className={classes.card}>
                    <h1>вход</h1>
                    <form action="">
                        <div className={classes.field}>
                            <span>email:</span>
                            <input type="email" name="" id="ei"  required placeholder="ivan@email.com" />

                        </div>
                        <div className={classes.field}>
                            <span>пароль:</span>
                            <input  type="password" required  name="" id="" />
                        </div>
                        <div id={classes.s}>
                            <button className={classes.auth} type="submit">войти</button>
                        </div>
                    </form>

                    
                </div>
                <div className={classes.card}>
                    <p id={classes.sug}>у вас нет аккаунта? <span><Link to="/join">зарегестрируйтесь!</Link></span></p>
                </div>
                
            </div>
            <Footer />
        </>
    );
}

export default Login;
