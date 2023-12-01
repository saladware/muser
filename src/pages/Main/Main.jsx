import React from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/Footer/Footer';
import Scrollbars from 'rc-scrollbars';
import classes from "./Main.module.css"
import { useState } from 'react';





const Theory = () => {
    return (
        <div>
            <h1>1. Введение</h1>
            <p>Чтобы стать уверенным и грамотным пользователем программы необходимо знать ее основы. В случае с <span className='primary'>Photoshop</span>, основой считается понятие растровая графика.</p>
            <p>Известно, что на компьютере изображения представляются в цифровом виде. Цифровое – значит, описано посредством чисел. Это позволяет хранить, просматривать и обрабатывать изображение в графических редакторах.</p>
            <p>На практике это происходит следующим образом: изображение разбивается на квадратные элементы одинакового размера и каждый такой элемент описывается отдельно.</p>

            <div className={classes.carded}>
                <p>Этот квадратный графический элемент называют <b>пикселом</b> <i>(picture element, pixel)</i>.</p>
            </div>
            <p>Описание пиксела – <i>это описание его цвета</i>.</p>
            <p>Изображения, представленные посредством пикселей, называют растровыми, то есть разложенные на элементы.</p>
            <div id={classes.raster} className={classes.carded}>
                <img style={{ maxWidth: "100%" }} src="/1.png" alt="" />
            </div>
            <p>Фотографии, произведения живописи, картинки с плавными переходами цветов обычно представляются в компьютере как растровые изображения.</p>
            <div className={classes.carded}>
                <p>Вот, например, обычная фотография белого медведя - это растровое изображение.</p>
                <img style={{ maxWidth: "100%", borderRadius: "1rem" }} src="/bear.jpg" alt="" />

            </div>

            <p>Создание растрового изображения можно представить следующим образом.
                Возьмем прямоугольник, разбитый на клеточки. Чтобы что-то нарисовать, необходимо заполнить соответствующие клеточки требуемым цветом.</p>
            <p>Кто знаком с техникой вышивания крестом – тому будет просто понять принцип растровой графики.
                Здесь то же самое – есть лоскут материи разбитый на клеточки:</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="/1.gif" style={{ maxWidth: "100%", borderRadius: "1rem", }} alt="" />
            </div>

            <p>Вам требуется только выбирать нужный цвет нитки и вышивать крестики в определенных по рисунку местах.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="2.gif" style={{ maxWidth: "100%", borderRadius: "1rem" }} alt="" />
            </div>

            <p>Для редактирования растровых изображений существуют специальные программные средства.
                Лидером среди редакторов растровых изображений является <span className='primary'>Adobe Photoshop</span>.</p>
            <p>Следует заметить, что рисование «<b>с нуля</b>» в редакторах растровой графики – довольно сложная задача.
                Для рисования «на чистом» листе лучше подходят редакторы так называемой векторной графики. Лидер среди векторных редакторов – <span className='primary'>Corel Draw</span>.</p>
            <p>Главное отличие векторной графики, что здесь изображения описываются не пикселами, а другими графическими элементами – линиями, фигурами и т.д. Эти объекты еще называют векторами. В векторных редакторах удобно рисовать картинки, где нет плавных переходов цветов, например, схемы, чертежи, плакаты.</p>
            <p>Но для ретуширования фотографий и создания спецэффектов этот редактор не подойдет.
                Еще одно отличие векторной графики от растровой заключается в том, что векторы легко переносят масштабирование. Качество векторного изображения не зависит от изменения масштаба, а следовательно, изменение масштаба не влияет на объем занимаемого места на диске. В то время как увеличение растрового изображения приводит к ухудшению качества (появляется зернистость).</p>
        </div>
    );
}

const Test = () => {
    return (
        <div>
            
        </div>
    );
}






const Main = () => {
    let [content, setContent] = useState(Theory)
    return (
        <>
            <div className="container">
                <Header2 />
                <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-around" }}>
                    <Scrollbars style={{ "width": "12vw", "height": "80vh", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "1rem" }}>
                        <div style={{ padding: "1rem" }}>
                            <h3 style={{ alignText: "center" }} >фотомонтаж в photoshop</h3>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem" }} ><span>1. Введение</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>2. интерфейс</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>3. перемещение</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>4. импорт/экспорт</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>5. терминология</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>6. основы работы</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>7. особые функции</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>8. шейдерф</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>9. нормали</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>10. цвета</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>11. продвинутые механики</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>12. эффекторы</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>13. объемный туман</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>14. эффект глубины</span></div>
                            <div style={{ backgroundColor: "rgba(0,0,0,0.25)", padding: "0.5rem", borderRadius: "0.5rem", marginTop: "0.5rem" }}><span style={{ color: "rgba(255,255,255, 0.2)" }}>15. тени</span></div>
                        </div>
                    </Scrollbars>
                    <Scrollbars style={{ width: "60vw", height: "80vh", backgroundColor: "rgba(0,0,0,0.2)", borderRadius: "1rem" }}>
                        <div style={{ padding: "2rem" }}>
                            {content}
                        </div>

                    </Scrollbars>
                </div>

                <div id={classes.mm}>
                    <div className={classes.mitem}><img onClick={() => {
                        setContent(Theory)
                    }} src="/book1.svg" alt="" /></div>
                    <div className={classes.mitem}><img onClick={() => {
                        setContent(Test)
                    }} src="/test.svg" alt="" /></div>
                    <div className={classes.mitem}><img src="/book1.svg" alt="" /></div>
                    <div className={classes.mitem}><img src="/note.svg" alt="" /></div>



                    <button >Далее</button>
                </div>


            </div>
            <Footer />
        </>
    );
}

export default Main;
