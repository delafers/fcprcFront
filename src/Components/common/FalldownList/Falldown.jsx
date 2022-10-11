import React from "react";
import { useState } from "react";
import s from "./Falldown.module.css"
import "./Falldown.css"
import img21 from "../../../assets/img/1.png"


const Falldown = ({url, header, children, style={}}) => {
  
    const [active, setActive] = useState(false)
    return <div onClick={() => {setActive(true)}} onBlur={() => {setActive(false)}} className={s.fall} style={style}>
      <div className={s.block}>
      <div style={{width: "700px", marginTop: "40px"}}>
        <div className={s.blockHead}>
        {header}
        </div>  
      <span className={active ? s.downarrow : s.arrow}> V </span></div>
     
      <div className={s.ico} style={{backgroundImage: `url(${url})`, zIndex:3, opacity: 0.5}}>
      
       </div>
       </div>         
            <nav  className={active ? s.active  :  s.info}> 
          <ul>
            {children}
          </ul>
        </nav>
        </div>
    
}

export default Falldown