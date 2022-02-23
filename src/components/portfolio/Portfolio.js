import { useEffect, useState } from "react";
import "./portfolio.scss"
import javaImg from '../../images/java_logo_640.jpg';
import PortfolioList from "../portfolioList/PortfolioList";
import {featuredPortfolio,
     webPortfolio,
      mobilePortfolio,
       designPortfolio,
        dataPortfolio } from '../../data';


export default function Portfolio( {queMenu, setQueMenu} ) {

    const [movido, setMovido] = useState("nomovido");
    console.log(movido);
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

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

    useEffect(()=> {

        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break; 
            case "mobile":
                setData(mobilePortfolio);
                break; 
            case "design":
                setData(designPortfolio);
                break;  
            case "data":
                setData(dataPortfolio);
                break;
        }

    },[selected]);

    return(
        <div className={"portfolio " + movido} id="portfolio" onMouseOver={()=> a()}>
            

            <div className="cartuchis"> 
    <div>
    <h1>Skills</h1>
    </div>
          
            <ul>
                {list.map((item) => (
                    <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
                ))}
            </ul>
            <div className="container">

            {data.map((d) => (
                 <div className="item">
                 <img className="imagenItem" src={d.img} alt="">
                 
                     
                 </img>
                 <h3>{d.title}</h3>
             </div>
                
            ))}
           
            
                
          
            </div>
            </div>
            <div className="barragonita"> </div>
           
            

        </div>
    )

    function a (){
        setQueMenu("negro");
        setMovido("movido");
        
    }

}

