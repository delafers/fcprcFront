import React from "react";
import Falldown from "../common/FalldownList/Falldown";
import img21 from "../../assets/img/1.png"
import s from "./Mediacia.module.css"
import { NavLink } from "react-router-dom";
import ico1 from "../../assets/img/link.png"
import ico2 from "../../assets/img/29_1-512.webp"
import mediacia from "../../assets/Directions/4_1.svg"
import s2 from "../../assets/Mediacia/2.png"
import s3 from "../../assets/Mediacia/3.png"
import s4 from "../../assets/Mediacia/4.png"
import s5 from "../../assets/Mediacia/5.png"
import s6 from "../../assets/Mediacia/6.png"
import s7 from "../../assets/Mediacia/7.png"
import s8 from "../../assets/Mediacia/8.png"
import s9 from "../../assets/Mediacia/9.png"
import s10 from "../../assets/Mediacia/10.png"
import s11 from "../../assets/Mediacia/11.png"



const Mediacia = () => {
    return<>
    <div className={s.header}>
        <img src={mediacia}/> <h2>
        Медиация
            </h2>
    </div>
        <Falldown url={img21} header={"О медиации"}>
            <HrefLi text="Основные положения" />
            <FileLi href="https://fcprc.ru/wp-content/uploads/2021/06/Federalnyj-zakon-ot-27-iyulya-2010-g-N-193-FZ-Ob-alternativnoj-protsedure-uregulirovaniya-sporov-s-uchastiem-posrednika-protsedure-mediatsii.pdf" text="Федеральный закон «Об альтернативной процедуре урегулирования споров с участием посредника (процедуре медиации)» от 27.07.2010 N 193-ФЗ .pdf"/>
        </Falldown>
        <Falldown url={s2} header={"О медиации. Нормативно-правовые акты"}>
            <FileLi text="Концепции развития до 2017 года сети служб медиации в целях реализации восстановительного правосудия в отношении детей, в том числе совершивших общественно опасные деяния, но не достигших возраста, с которого наступает уголовная ответственность в Российской Федерации .pdf"/>
            <FileLi text="Межведомственный план комплексных мероприятий по реализации Концепции развития сети служб медиации в целях реализации восстановительного правосудия в отношении детей, в том числе совершивших общественно опасные деяния, но не достигших возраста, с которого наступает уголовная ответственность в Российской Федерации, до 2025 года .pdf"/>
            <FileLi text="Распоряжение Правительства РФ от 30 июля 2014 г N 1430 р Об утверждении Концепции развития до 2017 г сети служб медиации .pdf"/>
            <FileLi text="Распоряжение Правительства РФ от 1 сентября 2018 г N 1837 p О продлении срока реализации Концепции до 2020 г .pdf"/>
        </Falldown>
        <Falldown url={s3}
        header={"Службы медиации в образовательных организациях и в организациях для детей-сирот и детей, оставшихся без попечения родителей"}>
            <FileLi text="Методические рекомендации .pdf"/>  
        </Falldown>
        <Falldown url={s4} header={"Службы медиации в специальных учебно-воспитательных учреждениях, подведомственных Минпросвещения России"}>
        <FileLi text="Методические рекомендации .pdf"/>
        <li>
        <Falldown url={s3} header="Сопровождение работы служб медиации СУВУ 2022 год" style={{width: "850px"}} >
            <FileLi text="Сопровождение служб медиации в специальных учебно-воспитательных учреждениях в июне 2022 года"/>
            <FileLi text="Сопровождение служб медиации в специальных учебно-воспитательных учреждениях в июне 2022 года"/>
            <FileLi text="Сопровождение служб медиации в специальных учебно-воспитательных учреждениях в июне 2022 года"/>
            <FileLi text="Сопровождение служб медиации в специальных учебно-воспитательных учреждениях в июне 2022 года"/>
        </Falldown>
        </li>
        <li>
        <Falldown url={s3} header="Сопровождение работы служб медиации СУВУ 2021 год" style={{width: "850px"}} >
            <FileLi text="Сопровождение служб медиации СУВУ"/>
            <FileLi text="Сопровождение служб медиации СУВУ в феврале"/>
            <FileLi text="Сопровождение служб медиации СУВУ в марте"/>
            <FileLi text="Сопровождение служб медиации СУВУ в апреле"/>
            <FileLi text="Сопровождение служб медиации СУВУ в мае"/>
            <FileLi text="Сопровождение служб медиации СУВУ в сентябре-октябре"/>
            <FileLi text="Сопровождение служб медиации СУВУ в ноябре-декабре"/>
        </Falldown>
        </li>
        <li>
        <Falldown url={s3} header="Обучение" style={{width: "850px"}} >
            <FileLi text="Обучение сотрудников служб медиации СУВУ"/>
        
        </Falldown>
        </li>
        
        </Falldown>
        <Falldown url={s5} header={"Просветительская деятельность (форумы, конференции, совещания)"}>
            <HrefLi text={"Видеоконференция <<Медиация как способ регулирования конфликтов>>"}/>
            <HrefLi text={"I Всероссийское совещание школьных служб медиации и примерения"}/>
            
        </Falldown>
        <Falldown url={s6} header={"Участие в мероприятиях партнеров"}>
        <HrefLi text={"Всероссийский молодёжный форум «Территория смыслов» – 2022"}/>
        <HrefLi text={"I межрегиональный форум «Подростки 360»"}/>
        <HrefLi text={"Вебинар «Медиативные практики в работе с несовершеннолетними: содействие социализации» 20 мая 2022"}/>
        <HrefLi text={"I Международный фестиваль «Медиация. Молодость. Будущее!»"}/>
        <HrefLi text={"II Международный форум «Сибирь: Европа и Азия – диалог о медиации»"}/>

        </Falldown>
        <Falldown url={s7} header={"Мониторинг служб медиации"}>
        <FileLi text="Мониторинг 2020-21 года .pdf"/>
        <FileLi text="Мониторинг 2019-20 года .pdf"/>

        </Falldown>
        <Falldown url={s8} header={"Реестр НКО, применяющих медиативные и восстановительные технологии"}>
        </Falldown>
        <Falldown url={s9} header={"Взаимодействие с КДНиЗП"}>
        </Falldown>
        <Falldown url={s10} header={"Взаимодействие с органами опеки и попечительства"}>
        </Falldown>
        <Falldown url={s11} header={"«Школа юного медиатора»"}>
        </Falldown>
    </>
}

const HrefLi = ({text, href}) => {
    return<li>
        <a href="https://fcprc.ru/mediacia/" >
        <div className={s.hrefblock} >
            {text}
            <img src={ico1}/>
        </div>
        </a>
    </li>
}
const FileLi = ({text, href="https://fcprc.ru/mediacia/"}) => {
    return<li className={s.file}>
        <a href={href} >
        <div>
            <img src={ico2}/>
            {text}
        </div>
        </a>
    </li>
}

export default Mediacia