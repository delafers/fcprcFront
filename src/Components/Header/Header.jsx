import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/img/arrow-128.ico"
import gor1 from "../../assets/img/gor-lin-a1.png"
import gor2 from "../../assets/img/gor-lin-a2.png"
import { useState } from "react";
import "./style.css";
const HeaderBlock = ({text}) => {
    return<>
    <div className={s.findBlock}>
        {text}
    </div>
    </>
}
const Header = () => {
    const [active, setActive] = useState(false)
    return<>
    <header className={s.rows}>
        <div className={s.minpros}>
          <div className={s.minText}>
            МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ
          </div>
          <div>
          Поиск
          </div>
        </div>
        <div className={s.picture}>
            <div>
                d
                <img src={logo}/>
            </div>

            <div className={s.hotline}>
                <div className={s.block}>
                    <img  src={gor1}/> 
                   <span>
                   <b>Горячая линия </b>
                        Тестирование обучающихся
                   </span>
                  
                   
                </div>
                <div className={s.block}>
                <img  src={gor2}/> 
                <span>
                <b>Горячая линия </b>
                        Тестирование обучающихся
                </span>
                </div>
                <div className={s.block}>
                <img  src={gor2}/> 
                <span>
                    <b>Горячая линия </b>
                        Тестирование обучающихся
                </span>
                </div>
            </div>
        </div>
        <div className={s.findBack}>

        
        <div className={s.finder}>
        <div onMouseMove={() => {setActive(true)}}>
            О центре 
            <nav
          className={`menu ${active ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Информация</a>
            </li>
            <li>
              <a href="#">Новости</a>
            </li>
            <li>
              <a href="#">Структура центра</a>
            </li>
            <li>
              <a href="#">Ключевые направления</a>
            </li>
            <li>
              <a href="#">Отчеты</a>
            </li>
            <li>
              <a href="#">Уставные документы</a>
            </li>
            <li>
              <a href="#">Государственное задаание</a>
            </li>
            <li>
              <a href="#">Открытые закупки</a>
            </li>
            <li>
              <a href="#">ПФХД</a>
            </li>
            <li>
              <a href="#">Сведения о доходах</a>
            </li>
            <li>
              <a href="#">Противодействие коррупции</a>
            </li>
            <li>
              <a href="#">Антимонопольное законодательство</a>
            </li>
            <li>
              <a href="#">Политика обработки персональных данных</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
        </nav>
        </div>
        <HeaderBlock text="Мониторинги"/>
        <HeaderBlock text="Мероприятия"/>
        <HeaderBlock text="Образование"/>
        <HeaderBlock text="Библиотека"/>
        <HeaderBlock text="Обращения граждан"/>
        </div>
        </div>

    </header>
    </>
}

export default Header