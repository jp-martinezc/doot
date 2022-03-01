import "./footer.scss";
import { useState } from "react";
import mapa from '../../images/where.png';
import Map from '../map/Map.js';



export default function Footer() {
    const [message, setMessage] = useState(false);

    

    const handleSubmit = (e)=>{
        e.preventDefault();
        
    }

    return(
        <div className="footer" id="footer">
            <div className="contact">
            <div className="left">
                <div className="leftContainer">
                <div className="item">a</div>
                <div className="item">a</div>
                <div className="item">a</div>
                <div className="hv"></div>
             </div>
            </div>
            <div className="right">
                <div className="wholeRight">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email"/>
                    <textarea placeholder="message"></textarea>
                    <button type="submit" onClick={()=> setMessage(!message)}>send</button>
                    {message && <span>Gracias! Responderé lo más pronto posible! :D</span>}
                </form>
                </div>

            </div>

            </div>

            <div className="mapa">
                <img className="mapaImg" src={mapa} alt=""></img>
            </div>

            

            

        </div>
    )

}