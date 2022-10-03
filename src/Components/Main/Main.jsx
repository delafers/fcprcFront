import React from "react";
import { useState } from "react";
import s from "./Main.module.css"
import news from "../../assets/img/news.png"
import news1 from "../../assets/img/news1.jpg"
import news2 from "../../assets/img/news2.png"
import banner1 from "../../assets/img/banner1.png"
import banner2 from "../../assets/img/banner2.png"
import img1 from "../../assets/Directions/1_1.svg"
import img2 from "../../assets/Directions/1_2.svg"
import gl1 from "../../assets/img/gl1.jpg"
import gl2 from "../../assets/img/gl2.jpg"
import gl3 from "../../assets/img/Logotip-linii.svg"
import help1 from "../../assets/Helpful/pol_res1.png"
import help2 from "../../assets/Helpful/polezn-resurs-2.png"
import help3 from "../../assets/Helpful/3.png"
import help4 from "../../assets/Helpful/4.png"
import help5 from "../../assets/Helpful/5.png"
import help6 from "../../assets/Helpful/6.png"

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
    
  
        
    
const Timer = () => {
    setInterval(() => {
        if(newsNumber  >= 2){
            setNewsNumber(0);
        }else{
            setNewsNumber(newsNumber + 1);
        }
        
        
    }, 5000)
}
Timer()
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
    <h2 style={{marginBottom: "30px"}}>
        Полезные ресурсы
    </h2>
    <Helpful />
    </>
}
const Directions = () => {
    return<div className={s.directions}>
    <div >
        
            <h3 class="proekt-title">Ключевые направления</h3>
            <div class="main-pro row">
                             
                <div class={s.seven}>
                    <SevenBlock img1={img1} img2={img2}/>
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
const SevenBlock = ({href, text, img1, img2}) => {
    return<>
    <a href="https://10letie.edu.gov.ru" className={s.dirBlock}>
        <div style={{backgroundImage: {img1},}}>
            <img src={img1} className={s.colorImg}/>
        </div>
                        <div style={{BackgroundImage: {img1}}}>                    
                        <span>Десятилетие детства</span>
                        </div>
                        
                    </a>
                    </>
}
const Hotlines = () => {
    return<div className={s.hotlines}>
        <Hotline imgSrc={gl1} text="По вопросам проведения социально-психологического тестирования обучающихся"/>
        <Hotline imgSrc={gl2} text="По вопросам реализации жилищных прав детей-сирот, детей, оставшихся без попечения родителей, и лиц из их числа"/>
        <Hotline imgSrc={gl3} text="По вопросам урегулирования конфликтов в школе, медиации и примирения в образовательных организациях"/>
    </div>
}
const Hotline = ({imgSrc, text}) => {
    return<div className={s.hotlineBlock}>
        <div className={s.hotline}>
        <div>
            <img src={imgSrc}/>
        </div>
        <div className={s.hotlineText}>
            {text}
        </div>
        
    </div>
    <Button />
    </div>
}
const Button = ({}) => {
    return<div className={s.buttonHotl}>
            Задать вопрос на горячую линию
    </div>
}
const Helpful = () => {
    return<div className={s.helpful}>
        <ImgHelp img={help1}/>
        <ImgHelp img={help2}/>
        <ImgHelp img={help3}/>
        <ImgHelp img={help4}/>
        <ImgHelp img={help5}/>
        <ImgHelp img={help6}/>
    </div>
}
const ImgHelp = ({img}) => {
    return<div className="">
        <img src={img}/>
    </div>
}
export default Main