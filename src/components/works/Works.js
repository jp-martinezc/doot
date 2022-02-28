import "./works.scss";
import bungo from '../../images/bungo.png';
import kimberly from '../../images/kimberly.png';
import yo from '../../images/yo.png'
import {Instagram, ChevronLeft, ChevronRight, Work, Person} from "@material-ui/icons";
import React, {  useState } from "react";

export default function Works({queMenu, setQueMenu, setMenuOpen, setTopbarColor}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id:1,
            icon: "instagram",
            title: "BungoMyDingo!",
            desc: "BungoMyDingo es un proyecto en donde tengo mis ilustraciones, variando desde la primera imagen que se me venga a la cabeza hasta mis perritos!",
            img: bungo,
            imgcn: "bungo",
            link: true,
            texto: "http://instagram.com/bungomydingo",
            
        },
        {
            id:2,
            icon: "work",
            title: "Kimberly-Clark",
            desc: "Realicé mis practicas academicas en la compañía Kimeberly-Clark, en donde me desempeñé como desarrollador en back y front para mejorar el funcionamiento de sus máquinas, mostrando datos cruciales analizados con herramientas de analítica.",
            img: kimberly,
            imgcn: "kimberly",
            link: false,
            texto: "http://instagram.com/bungomydingo",
            
        },

        {
            id:3,
            icon: "person",
            title: "Proximamente!",
            desc: "Actualmente estoy trabajando en muchos nuevos proyectos para mostrar! :D",
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
        <div className="works" id="works" onMouseOver={() => a()}> 
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
                        <img className={d.imgcn} src={d.img}></img>
                    </div>
                </div>
                
            </div>)))}
            
            
        </div>

        
            <ChevronLeft className="leftArrow" onClick={()=>handleClick("left")}/>
            <ChevronRight className="rightArrow" onClick={()=>handleClick()}/>

        </div>
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
                return (<Person></Person>)

           
        }

       
    }

    function mapLink(poner, texto){
        if(poner){
            return(
                <a href={texto} className="link">Click aqui para ver mas!</a>
            )
        }

    }

    


}