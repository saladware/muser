import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import classes from "./Join.module.css"
import { Link, redirect } from 'react-router-dom';
import { getFirestore, addDoc, collection, getDoc } from "firebase/firestore"
import { useState } from 'react';


const Join = () => {
    const db = getFirestore()

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const sendToStorage = async () => {
        const docRef = await addDoc(collection(db, "users"), {
            email: email,
            surname: surname,
            name: name,
            password: password,
            score: 0,
            lesson: null
        })
        console.log
        window.location.pathname = "/welcome"
    }
    
    return (
        <>
            <div className="container">
                <Header />
                <div className={classes.card}>
                    <h1>регистрация на курс</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <div className={classes.field}>
                            <span>имя</span>
                            <input  onChange={e => setName(e.target.value)} type="text" name="name" id="i1" value={name} required />

                        </div>
                        <div className={classes.field}>
                            <span>фамилия</span>
                            <input type="text" onChange={e => setSurname(e.target.value)} name="surname" value={surname} id="i2" required/>
                        </div>
                        <div className={classes.field}>
                            <span>email</span>
                            <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="" id="i3" required/>
                        </div>
                        <div className={classes.field}>
                            <span>пароль</span>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} name="" id="i4" required/>
                        </div>
    
                        <div id={classes.s}>
                            <button className={classes.auth} type='submit'  onClick={sendToStorage}>записаться</button>
                        </div>

                    </form>
                </div>

                <div className={classes.card}>
                    <p id={classes.sug}>уже есть аккаунт? <span><Link to="/login">авторизуйтесь!</Link></span></p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Join;