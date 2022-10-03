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
import img3 from "../../assets/Directions/2_1.svg"
import img4 from "../../assets/Directions/2_2.svg"
import img5 from "../../assets/Directions/3_1.svg"
import img6 from "../../assets/Directions/3_2.svg"
import img7 from "../../assets/Directions/4_1.svg"
import img8 from "../../assets/Directions/4_2.svg"
import img9 from "../../assets/Directions/5_1.svg"
import img10 from "../../assets/Directions/5_2.svg"
import img11 from "../../assets/Directions/6_1.svg"
import img12 from "../../assets/Directions/6_2.svg"
import img13 from "../../assets/Directions/7_1.svg"
import img14 from "../../assets/Directions/7_2.svg"
import img15 from "../../assets/Directions/8_1.svg"
import img16 from "../../assets/Directions/8_2.svg"
import img17 from "../../assets/Directions/9_1.svg"
import img18 from "../../assets/Directions/9_2.svg"
import img19 from "../../assets/Directions/10_1.svg"
import img20 from "../../assets/Directions/10_2.svg"
import img21 from "../../assets/Directions/11_1.svg"
import img22 from "../../assets/Directions/11_2.svg"
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
    <footer style={{backgroundColor: "#455476"}} className={s.foot}>
        <div style={{margin: "100px 100px 0px 100px"}}>
            <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", color: "#fff"}}>
                <div style={{margin: "10px 10px 20px 10px", opacity: 0.6, fontSize: "19px"}}>
                    О центре
                </div>
                <div style={{margin: "10px 10px 20px 10px", opacity: 0.6, fontSize: "19px"}}>
                    Ключевые проекты
                </div>
                <div style={{margin: "10px 10px 20px 10px", opacity: 0.6, fontSize: "19px"}}>
                    Мероприятия
                </div>
                <div>
                <ul class="contact-list">
                        <li><span class="icon-address1"></span><a href="https://yandex.ru/maps/?text=115093%2C+%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0%2C+%D1%83%D0%BB.+%D0%9B%D1%8E%D1%81%D0%B8%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F%2C+%D0%B4.+51" rel="nofollow" target="_blank">115093, г. Москва, ул. Люсиновская, д. 51</a>
                        </li><li><span class="icon-maillt"></span><a href="mailto:info@fcprc.ru" class="href">info@fcprc.ru</a>
                        </li><li><span class="icon-phonelt"></span><a href="tel:+74994440806,10008" class="href">+7 (499) 444-08-06, <span>доб. 100 08</span></a>
                    </li></ul>
                </div>
                <div>
                </div>
                <div >
                    Все мероприятия
                </div>
            </div>
            <div>
                <p>
                <a class="shrift10" target="_blank" rel="nofollow" href="https://edu.gov.r">МИНИСТЕРСТВО ПРОСВЕЩЕНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ</a>
                </p>
                <div style={{display: "flex", justifyContent:"space-between"}}>

                <span style={{color:"#fff", opacity: 0.6}}>© ФГБУ "Центр защиты прав и интересов детей", 2022</span>
                <a target="_blank" rel="noopener" href="http://fcprc.ru/wp-content/uploads/2021/08/20-1-29-04-2021.pdf">Политика конфиденциальности</a>
                </div>
            </div>
        </div>

    </footer>
    </>
}
const Directions = () => {
    return<div className={s.directions}>
    <div >
        
            <h3 class="proekt-title">Ключевые направления</h3>
            <div class="main-pro row">
                             
                <div class={s.seven}>
                    <SevenBlock img1={img1} img2={img2} text="Десятилетие детства"/>
                    <SevenBlock img1={img3} img2={img4} text="ФРЦ КДН и ЗП"/>
                    <SevenBlock img1={img5} img2={img6} text="Международное сотрудничество"/>
                    <SevenBlock img1={img7} img2={img8} text="Медиация"/>
                    <SevenBlock img1={img9} img2={img10} text="Профилактика девиантного поведения"/>
                    <SevenBlock img1={img11} img2={img12} text="ФРЦ СУВУ"/>
                    <SevenBlock img1={img13} img2={img14} text="Всероссийские конкурсы"/>
                </div>
                <div className={s.fore}>
                <SevenBlock img1={img15} img2={img16} text="ФРЦ в сфере защиты прав детей, оставшихся без попечения родителей"/>
                <SevenBlock img1={img17} img2={img18} text="ФРЦ ПМПК"/>
                <SevenBlock img1={img19} img2={img20} text="ППМС Помощь"/>
                <SevenBlock img1={img21} img2={img22} text="Федеральный центр развития программ социализации подростков"/>
                </div>
            </div>
        
    </div>
    
    </div>
}
const SevenBlock = ({href, text, img1, img2}) => {
    return<>
    <a href="https://10letie.edu.gov.ru" className={s.dirBlock} >
        <div style={{backgroundImage: `url(${img2}`}}>
            <img src={img1} className={s.colorImg}/>
        </div>
                        <div style={{BackgroundImage: {img1}}}>                    
                        <span>{text}</span>
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