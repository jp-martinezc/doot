import { useState } from "react";
import "./portfolio.scss"
import javaImg from '../../images/java_logo_640.jpg';
import PortfolioList from "../portfolioList/PortfolioList";
import {featuredPortfolio} from '../../data';


export default function Portfolio( {queMenu, setQueMenu} ) {

    const [movido, setMovido] = useState("nomovido");
    console.log(movido);
    const [selected, setSelected] = useState("featured");

    const list = [
        {
            id: "featured",
            title: "Featured",
        },
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "design",
            title: "Design",
        },
        {
            id: "data",
            title: "Data",
        },
    ];

    return(
        <div className={"portfolio " + movido} id="portfolio" onMouseOver={()=> a()}>
            

            <div className="cartuchis"> 
            <h1>Skills</h1>
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            <div className="item">
                <img className="imagenItem" src={javaImg} alt="">
                
                    
                </img>
                <h3>app</h3>
            </div>
            </div></div>
            <div className="barragonita"> </div>
           
            

        </div>
    )

    function a (){
        setQueMenu("negro");
        setMovido("movido");
        
    }

}

