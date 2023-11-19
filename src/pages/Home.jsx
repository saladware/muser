import React from 'react';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="container">
                <Header />
                <section id='s1'>
                    <h1>фото и <br /> видеомонтаж</h1>
                    <p className='muted'>научись создавать клипы и фото
                        <br />
                        для своих треков</p>
                    <button className='btn-secondary' id='b1'><Link style={{ "textDecoration": "none" }} to="/join">записаться на курс</Link></button>
                </section>
                <section id='s2'>
                    <div id='card'>
                        <h2>почему (why?) тебе нужно научится фото и видео монтажу</h2>
                        <p className='muted'>хорошо обоснованная и весьма информативная причина, по которой тебе обязательно нужно начуится фото и видео монтажу, написанная шрифтом montserrat(medium) размера 24, а что важнее она написана кратко и привлекает внимание.</p>
                        <img src="i1.png" alt="" />
                    </div>
                </section>
                <section id="s3">
                    <h2>наши курсы</h2>
                    <div className="cards">
                        <div className='c'>
                            <h3>видеомонтаж в
                                <br />
                                Premiere pro</h3>
                            <p>краткое описание данной программы и ее невероятные полюсы, краткая актуальность и парочка громких слов для мотивации</p>
                            <img src="/premier.svg" alt="" />
                            <div className="open">
                                <Link to="/join">
                                    <button className='btn-secondary'>записаться на курс</button>
                                </Link>
                            </div>
                        </div>
                        <div className='c'>
                            <h3>фотомонтаж в
                                <br />
                                Photoshop</h3>
                            <p>краткое описание данной программы и ее невероятные полюсы, краткая актуальность и парочка громких слов для мотивации</p>
                            <img src="/photoshop.svg" alt="" />
                            <div className="open">
                                <Link to="/join">
                                    <button className='btn-secondary'>записаться на курс</button>
                                </Link>

                            </div>

                        </div>
                    </div>
                </section>



                <section id='s4'>
                    <h2>содержание</h2>
                    <div className="cards" style={{position: "relative"}}>
                        <div className="card" id="c1">
                            <h3>теоретические <br />занятия</h3>
                            <p className='muted'>теоретические занятия <br />для начального и <br />продвинутого уровней</p>
                        </div>
                        <img src="/Vector 1.svg" alt="" id='c22' style={{position: "absolute", top: "15rem", left: "5rem"}} />
                        <div className="card" id="c2">
                            <h3>тест</h3>
                            <p className='muted'>короткий тест по <br />материалу главы</p>
                        </div>
                        <img src="/Vector 2.svg" alt="" id="c44" style={{position: "absolute", top: "8rem", left: "25rem"}}/>
                        <div className="card" id="c3">
                            <h3>домашнее <br />задание</h3>
                            <p className='muted'>практическое задание <br /> для закрепления <br /> пройденного <br />материала</p>
                        </div>
                        <img src="/Vector 3.svg" alt="" id="c64" style={{position: "absolute", bottom: "2rem", right: "17rem"}}/>
                        <div className="card" id="c4">
                            <h3>больше <br />практики!</h3>
                            <p className='muted'>в конце курса вам будет <br />доступен бот - <br /> генератор заданий</p>
                        </div>
                    </div>
                </section>

                <section id="s5">
                    <h2>преимущества курсов</h2>
                    <div className="cards">
                        <div className="c1">
                            <img src="/price.svg" alt="" />
                            <h3>бесплатно</h3>
                            <p className='muted'>наши курсы <br />полностью <br />бесплатные</p>
                        </div>
                        <div className="c2">
                            <img src="/exam.svg" alt="" />
                            <h3>много практики</h3>
                            <p className='muted'>в наших курсах <br />присутствует большое <br />количество <br />практических заданий</p>
                        </div>
                        <div className="c3">
                            <img src="/cert.svg" alt="" />
                            <h3>сертификат</h3>
                            <p className='muted'>в конце вы <br />получите <br />сертификат <br />подтверждающий <br />прохождение <br />качественного <br />обучения</p>
                        </div>
                        <div className="c4">
                            <img src="/bag.svg" alt="" />
                            <h3>готовое портфолио</h3>
                            <p className='muted'>По завершении курса у вас на <br />руках будет несколько <br />готовых работ, которые вы <br />сможете поместить себе в <br />портфолио для привлечения <br />новых заказчиков</p>
                        </div>
                    </div>
                </section>
                <section id="s6">
                    <h2>о нас</h2>
                    <p className='muted'>Современные технологии достигли такого уровня, что существующая теория не оставляет шанса для поэтапного и последовательного развития общества. Однозначно, тщательные исследования конкурентов, превозмогая сложившуюся непростую экономическую ситуацию, своевременно верифицированы. Современные технологии достигли такого уровня, что укрепление и развитие внутренней структуры требует определения и уточнения прогресса профессионального сообщества. Картельные сговоры не допускают ситуации, при которой предприниматели в сети интернет, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу! Безусловно, курс на социально-ориентированный национальный проект играет важную роль в формировании новых предложений. забей это случайно сгенерированный текст</p>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
