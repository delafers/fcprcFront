import React from "react";
import Falldown from "../common/FalldownList/Falldown";
import img21 from "../../assets/img/1.png"
import s from "./Behavior.module.css"
import { NavLink } from "react-router-dom";
import ico1 from "../../assets/Behavior/1.png"
import ico2 from "../../assets/Behavior/2.png"
import ico3 from "../../assets/Behavior/3.png"
import doc from "../../assets/img/doc.svg"



const Behavior = () => {
    return<div>
    <div>
        <h2>
            Профилактика девиантного поведения
        </h2>
    <div className={s.fall}>
      <div style={{marginTop: "30px"}}>
      <div  className={s.block}>
        <div className={s.blockHead} style={{width: "700px", height: "150px"}}>
            <div className={s.text}>
            <img src={doc} />
            Ответственное поведение - ресурс здоровья
            </div>
            <div className={s.button}>
                Перейти -
            </div>
        </div>       
        <div className={s.ico} style={{backgroundImage: `url(${ico1})`, zIndex:3, opacity: 0.7}}>
        
       </div>
       </div>         
        </div>
        <div style={{marginTop: "30px"}}>
      <div  className={s.block}>
        <div className={s.blockHead} style={{width: "700px", height: "150px"}}>
            <div className={s.text}>
            <img src={doc} />
            Ценность жизни - обеспечение вопросов детской безопасности
            </div>
            <div className={s.button}>
                Перейти -
            </div>
            
        </div>       
        <div className={s.ico} style={{backgroundImage: `url(${ico2})`, zIndex:3, opacity: 0.7}}>
        
       </div>
       </div>         
        </div>
        <div style={{marginTop: "30px"}}>
      <div  className={s.block}>
        <div className={s.blockHead} style={{width: "700px", height: "250px"}}>
            <div className={s.text}>
            <img src={doc} />
            Концепция развития системы профилактики
безнадзорности и правонарушений несовершеннолетних
            </div>
            <div className={s.button} style={{marginTop: "70px"}}>
                Перейти -
            </div>
            
        </div>       
        <div className={s.ico} style={{backgroundImage: `url(${ico3})`, zIndex:3, opacity: 0.7}}>
        
       </div>
       </div>         
        </div>
    </div>
    </div>
    </div>

}



export default Behavior