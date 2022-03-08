import "./works.scss";
import bungo from '../../images/bungo.png';
import kimberly from '../../images/kimberly.png';
import yo from '../../images/yo.png'
import {Instagram, ChevronLeft, ChevronRight, Work, Person} from "@material-ui/icons";
import React, {  useState } from "react";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";

export default function Works({queMenu, setQueMenu, setMenuOpen, setTopbarColor, language}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id:1,
            icon: "instagram",
            title: "BungoMyDingo!",
            desc: translate('bungo'),
            img: bungo,
            imgcn: "bungo",
            link: true,
            texto: "http://instagram.com/bungomydingo",
            
        },
        {
            id:2,
            icon: "work",
            title: "Kimberly-Clark",
            desc: translate('kimberly'),
            img: kimberly,
            imgcn: "kimberly",
            link: false,
            texto: "http://instagram.com/bungomydingo",
            
        },

        {
            id:3,
            icon: "person",
            title: translate('next'),
            desc: translate('developing'),
            img: yo,
            imgcn: "yo",
            link: false,
            texto: "http://instagram.com/bungomydingo",
            
        },

    ];

    const handleClick = (way) => {
        way === "left"
        ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : data.length -1)
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 :0);
    }

    return(
        <I18nPropvider locale={language}>
        <div className="works" id="works" onMouseOver={() => a()} onTouchMove={()=> a()} onDrag={()=> a()} onTouchMoveCapture={()=> a()}> 
        <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)` }}>
        
            {(data.map((d) => (
            <div className="container">
                <div className="item">
                    <div className="left">

                        <div className="leftContainer">
                            {mapIcon(d.icon)}
                            
                            <h2>{d.title}</h2>
                            <p>{d.desc}</p>
                            {mapLink(d.link,d.texto)}
                        </div>


                    </div>
                    <div className="right">
                        <img className={d.imgcn} src={d.img} alt=""></img>
                    </div>
                </div>
                
            </div>)))}
            
            
        </div>

        
            <ChevronLeft className="leftArrow" onClick={()=>handleClick("left")}/>
            <ChevronRight className="rightArrow" onClick={()=>handleClick()}/>

        </div>
        </I18nPropvider>
    )

    function a (){
        setQueMenu("amarillo");
        setTopbarColor("amarillo");
        
        
        
        
    }

    function mapIcon(icono){
        switch(icono)
        {
            case "instagram":
                return (<Instagram className="ig"></Instagram>);

            case "work":
                return (<Work></Work>);

            case "person":
                return (<Person></Person>);
            default:    

           
        }

       
    }

    function mapLink(poner, texto){
        if(poner){
            return(
                <a href={texto} className="link">{translate('click')}</a>
            )
        }

    }

    


}