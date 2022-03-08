import { useEffect, useState } from "react";
import "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {featuredPortfolio,
     webPortfolio,
      mobilePortfolio,
       designPortfolio,
        dataPortfolio } from '../../data';
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";


export default function Portfolio( {queMenu, setQueMenu, setTopbarColor, language} ) {

    const [movido, setMovido] = useState("nomovido");
    
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: translate('Featured'),
        },
        {
            id: "web",
            title: translate('Web App'),
        },
        {
            id: "mobile",
            title: translate('Mobile App'),
        },
        {
            id: "design",
            title: translate('Design'),
        },
        {
            id: "data",
            title: translate('Data'),
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
            default:    
        }

    },[selected]);

    return(
        <I18nPropvider locale={language} className="meh">
        <div className={"portfolio " + movido} id="portfolio" onMouseOver={()=> a()} onTouchMove={()=> a()} onTouchMoveCapture={()=> a()}>
            

            <div className="cartuchis"> 
    <div>
    <h1>{translate('Skills')}</h1>
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
        </I18nPropvider>
    )

    function a (){
        setQueMenu("negro");
        setMovido("movido");
        setTopbarColor("negro");
        
    }

}

