import "./footer.scss";
import { useState } from "react";
import mapa from '../../images/where.png';
import Map from '../map/Map.js';
import {Instagram, LinkedIn, Person} from "@material-ui/icons"
import dsc from '../../images/discord.png';
import hv from '../../documents/JuanPabloMartinez.pdf'
import { send } from 'emailjs-com';








export default function Footer() {
    
    const [message, setMessage] = useState(false);

    const [toSend, setToSend] = useState({
        email: '',
        message: ''
      });

    const handleSubmit = (e)=>{
        e.preventDefault();

        send(
            'service_njv08ls',
            'template_62a0sgc',
            toSend,
            'wO2uBhS6qKo1gn0ko'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });

         
        
    }

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return(
        <div className="footer" id="footer">

            <Map/>
            <div className="contact">
            <div className="left">
                <div className="leftContainer">
                <a className="item" href="https://discordapp.com/users/471131841626374156">
                    <div className="leftCard">
                        <img className="dscLogo" alt="" src={dsc}></img>
                    </div>
                    <div className="rightCard">
                        <h3>Escribeme en discord!</h3>
                    </div>

                </a>
                <a className="item" href="https://instagram.com/chuchomartinez27">
                <div className="leftCard">
                    <Instagram className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>Sigueme en Instagram!</h3>
                    </div>
                </a>
                <a className="item" href="https://www.linkedin.com/in/juan-pablo-martinez-contreras-2bb193211/">
                <div className="leftCard">
                        <LinkedIn className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>Encuentrame en LinkeIn!</h3>
                    </div>
                </a>
                <a className="item" href={hv} download={hv}>
                <div className="leftCard">
                    <Person className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>Descarga mi hoja de vida!</h3>
                    </div>
                </a>
             </div>
            </div>
            <div className="right">
                <div className="wholeRight">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" name='email' value={toSend.email} onChange={handleChange}/>
                    <textarea placeholder="message" name='message' value={toSend.message} onChange={handleChange}></textarea>
                    <button type="submit" onClick={()=> setMessage(!message)}>send</button>
                    
                </form>
                {message && <span>Gracias! Responderé lo más pronto posible! :D</span>}
                </div>

            </div>

            </div>

            <div className="mapa">
                <img className="mapaImg" src={mapa} alt=""></img>
            </div>

            

            

        </div>
    )

}
