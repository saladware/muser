import React from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';



const Profile = () => {
    let progress = 45;

    return (
        <>
            <div className="container">
                <Header2 />
                <div style={{
                    padding: "2rem",
                    backgroundColor: "rgba(0,0,0,0.25)",
                    borderRadius: "2rem"
                }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{
                            padding: "1rem",
                            marginRight: "1rem",
                            borderRadius: "50%",
                            backgroundColor: "grey",
                            width: "fit-content"

                        }}>
                            <img style={{ "height": "4rem" }} src="/profile.svg" alt="" />
                        </div>
                        <div>
                            <h3 style={{ margin: 0 }}>Иван Иванов</h3>
                            <div style={{ display: "flex" }}>
                                <p className='muted' style={{ margin: 0, marginRight: "0.4rem" }}>relaemail@gmail.com</p>
                                <img src="/settings.svg" alt="" />
                            </div>

                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
                        <div style={{
                            padding: "2rem",
                            backgroundColor: "rgba(0,0,0,0.25)",
                            borderRadius: "2rem"
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ marginRight: "1rem" }} src="/photoshop.svg" alt="" />
                                <h3>фотомонтаж в photoshop</h3>
                            </div>
                            <p>Прогресс курса: <span style={{ color: "rgb(15,116,239)", fontWeight: "bolder" }}>{progress}%</span></p>
                            <progress value={progress / 100} style={{ "width": "100%", marginTop: "1rem" }} />
                            <div style={{ fontWeight: "500" }}>
                                <p>последняя пройденная тема</p>
                                <p style={{ color: "#C3006B", fontWeight: "bolder" }}>1.2 настройка ПО</p>
                            </div>
                            <br />
                            <div>
                                <p>следущая тема</p>
                                <p style={{ color: "#C3006B", fontWeight: "bolder" }}>1.3 термины</p>
                            </div>
                            <div>
                                <br />
                                <p>cредняя оценка работ</p>
                                <p style={{ color: "#C3006B", fontWeight: "bolder" }}>4.45</p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Link to="/main">
                                    <button className='btn-secondary'>продолжить курс</button>
                                </Link>

                            </div>

                        </div>
                        <div style={{
                            padding: "2rem",
                            backgroundColor: "rgba(0,0,0,0.25)",
                            borderRadius: "2rem"
                        }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <img style={{ marginRight: "1rem" }} src="/premier.svg" alt="" />
                                <h3>видеомонтаж в premier pro</h3>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70%" }}>
                                <Link to="/join"><button className='btn-secondary'>начать курс</button></Link>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
