import React from "react";
import { useState } from "react";
import s from "./Main.module.css"
import news from "../../assets/img/news.png"
import news1 from "../../assets/img/news1.jpg"
import news2 from "../../assets/img/news2.png"
import banner1 from "../../assets/img/banner1.png"
import banner2 from "../../assets/img/banner2.png"
import { useEffect } from "react";


const Main = () => {
    return<>
    <div className={s.main}>
        <News />
    </div>
    </>
}

const News = () => {
    const [newsNumber, setNewsNumber] = useState(0)
    const imgs = [news, news1, news2]
    
    useEffect(() => {
        Timer()
    })
const Timer = () => {
    setInterval(() => {
        if(newsNumber  >= 2){
            setNewsNumber(0);
        }else{
            setNewsNumber(newsNumber + 1);
        }
        
        
    }, 5000)
}
    
    return<>
    <div className={s.news}>
        <div className={s.img} >
            <img  src={imgs[newsNumber]}/>
        </div>
        <div className={s.description} >
            <div className={s.N1} style={{backgroundColor: newsNumber == "0" ? "#ff5845" : "#eaf1f4"}}>
            <div class="post__block--title">
            <h3><a href="https://fcprc.ru/news/goryachaya-liniya-po-voprosam-mediatsii-i-primireniya-v-otnoshenii-nesovershennoletnih-obuchayushhihsya-obrazovatelnyh-organizatsij1/" class="href">Горячая линия по вопросам урегулирования конфликтов в школе, медиации и примирения  в образовательных организациях</a></h3>
            <div class="date">
                <span>22 сентября 2022</span>
            </div>
        </div>

            </div>

            <div style={{backgroundColor: newsNumber == "1" ? "#ff5845" : "#eaf1f4"}}>
            <div class="post__block--title">
            <h3><a href="https://fcprc.ru/news/33345/" class="href">15 сентября 2022 года стартует Всероссийский конкурс программ социализации подростков</a></h3>
            <div class="date">
                <span>14 сентября 2022</span>
            </div>
            </div>
            </div>
            <div style={{backgroundColor: newsNumber == "2" ? "#FEAA38" : "#eaf1f4"}}>
            <h3><a href="https://fcprc.ru/news/nauchno-metodicheskoe-obespechenie-edinogo-podhoda-vnedreniya-sotsialnyh-v-tom-chisle-obrazovatelnyh-praktik-s-dokazannoj-effektivnostyu-v-chasti-realizatsii-meropriyatij-desyatiletiya-detstva/" class="href">Научно-методическое обеспечение единого подхода внедрения социальных (в том числе образовательных) практик с доказанной эффективностью в части реализации мероприятий Десятилетия детства</a></h3>
            <div class="date">
                <span>14 сентября 2022</span>
            </div>
        </div>
        </div>
    </div>
    <Directions />
    <div className={s.banners}>
        <img src={banner1 }/>
        <img src={banner2 }/>

    </div>
    <h2 style={{marginBottom: "30px"}}>
        Горячие линии
    </h2>
    < Hotlines />
    </>
}
const Directions = () => {
    return<div className={s.directions}>
    <div >
        
            <h3 class="proekt-title">Ключевые направления</h3>
            <div class="main-pro row">
                             
                <div class={s.seven}>
                    <a href="https://10letie.edu.gov.ru" className={s.dirBlock}>
                        
                        <span>Десятилетие детства</span>
                    </a>
                    <a href="/kdn/" className={s.dirBlock}>
                        
                        <span>ФРЦ КДН и ЗП</span>
                    </a>
                    <a href="/nashi-proekty/international/" className={s.dirBlock}>
                        
                        <span>Международное сотрудничество</span>
                    </a>
                    <a href="/mediacia/" className={s.dirBlock}>
                        
                        <span>Медиация</span>
                    </a>
                    <a href="/profilaktika-deviantnogo-povedeniya/" className={s.dirBlock}>
                        
                        <span>Профилактика девиантного поведения</span>
                    </a>
                    <a href="/suvu/" className={s.dirBlock}>
                        
                        <span>ФРЦ СУВУ</span>
                    </a>
                    <a href="/vserossijskie-konkursy/" className={s.dirBlock}>
                        
                        <span>Всероссийские конкурсы</span>
                    </a>
                </div>
                <div className={s.fore}>
                    <a href="https://frcopeca.ru" className={s.dirBlock}>
                        
                        <span>ФРЦ в сфере защиты прав детей, оставшихся без попечения родителей</span>
                    </a>
                    <a href="https://pmpkrf.ru" className={s.dirBlock}>
                        
                        <span>ФРЦ ПМПК</span>
                    </a>
                    <a href="https://ovzrf.ru" className={s.dirBlock}>
                        
                        <span>ППМС Помощь</span>
                    </a>
                    <a href="https://fcprc.ru/federalnyj-tsentr-razvitiya-programm-sotsializatsii-podrostkov/" className={s.dirBlock}>
                       
                        <span>Федеральный центр развития программ социализации подростков</span>
                    </a>
                </div>
            </div>
        
    </div>
    
    </div>
}
const Hotlines = () => {
    return<div className={s.hotlines}>
        <Hotline imgSrc={news1} text="По вопросам проведения социально-психологического тестирования обучающихся"/>
        <Hotline imgSrc={news1} text="По вопросам проведения социально-психологического тестирования обучающихся"/>
        <Hotline imgSrc={news1} text="По вопросам проведения социально-психологического тестирования обучающихся"/>
    </div>
}
const Hotline = ({imgSrc, text}) => {
    return<div className={s.hotline}>
        <div>
            <img src={imgSrc}/>
        </div>
        <div className={s.hotlineText}>
            {text}
        </div>
    </div>
}
export default Main