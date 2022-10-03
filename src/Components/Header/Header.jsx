import React from "react";
import s from "./Header.module.css"
import logo from "../../assets/SVG/Logo.svg"
import gor1 from "../../assets/img/gor-lin-a1.png"
import gor2 from "../../assets/img/gor-lin-a2.png"
import gor3 from "../../assets/img/mediac.gif"
import ico1 from "../../assets/SVG/01.svg"
import ico2 from "../../assets/SVG/02.svg"
import ico3 from "../../assets/SVG/03.svg"
import ico4 from "../../assets/SVG/04.svg"
import ico5 from "../../assets/SVG/05.svg"
import ico6 from "../../assets/SVG/06.svg"
import help1 from "../../assets/Helpful/pol_res1.png"

import { useState } from "react";
import "./style.css";
const HeaderBlock = ({text, img}) => {
    return<>
    <div className={s.findBlock}>
      <img src={img}/>
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
            <img src={help1}/>
            МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ
          </div>
          <div>
          Поиск
          <span>Версия для слабовидящих</span>
          </div>
        </div>
        <div className={s.picture}>
            <div>
              
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
                <img  src={gor3}/> 
                <span>
                    <b>Горячая линия </b>
                        Тестирование обучающихся
                </span>
                </div>
            </div>
        </div>
        <div className={s.findBack}>
        <div className={s.finder}>
        <div onMouseMove={() => {setActive(true)}} onBlur={() => {setActive(false)}}>
          <img src={ico1}/>
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
        <HeaderBlock text="Мониторинги" img={ico2}/>
        <HeaderBlock text="Мероприятия" img={ico3}/>
        <HeaderBlock text="Образование" img={ico4}/>
        <HeaderBlock text="Библиотека" img={ico5}/>
        <HeaderBlock text="Обращения граждан" img={ico6}/>
        </div>
        </div>

    </header>
    </>
}

export default Header