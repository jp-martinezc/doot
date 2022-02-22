import { useState } from "react";
import "./portfolio.scss"





export default function Portfolio( {queMenu, setQueMenu} ) {

    const [movido, setMovido] = useState("nomovido");
    console.log(movido);

    return(
        <div className={"portfolio " + movido} id="portfolio" onMouseOver={()=> a()}>

            <div className="barragonita"> </div>
            <h1>Skills</h1>
            <ul>
                <li>Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Design</li>
            </ul>
            <div className="container">
            <div className="item">
                <img src="" alt="">
                    
                </img>
            </div>
            </div>
            

        </div>
    )

    function a (){
        setQueMenu("negro");
        setMovido("movido");
        
    }

}

