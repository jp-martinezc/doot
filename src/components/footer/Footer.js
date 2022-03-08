import "./footer.scss";
import { useState } from "react";
import mapa from '../../images/where.png';
import {Instagram, LinkedIn, Person,Phone, Email} from "@material-ui/icons"
import dsc from '../../images/discord.png';
import hv from '../../documents/JuanPabloMartinez.pdf'
import { send } from 'emailjs-com';
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";








export default function Footer({language}) {
    
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
        <I18nPropvider locale={language}>
        <div className="footer" id="footer">

           
            <div className="contact">
            <div className="left">
                <div className="leftContainer">
                <a className="item" href="https://discordapp.com/users/471131841626374156">
                    <div className="leftCard">
                        <img className="dscLogo" alt="" src={dsc}></img>
                    </div>
                    <div className="rightCard">
                        <h3>{translate('discord msg')}</h3>
                    </div>

                </a>
                <a className="item" href="https://instagram.com/chuchomartinez27">
                <div className="leftCard">
                    <Instagram className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>{translate('instagram msg')}</h3>
                    </div>
                </a>
                <a className="item" href="https://www.linkedin.com/in/juan-pablo-martinez-contreras-2bb193211/">
                <div className="leftCard">
                        <LinkedIn className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>{translate('linkedin msg')}</h3>
                    </div>
                </a>
                <a className="item" href={hv} download={hv}>
                <div className="leftCard">
                    <Person className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>{translate('hv msg')}</h3>
                    </div>
                </a>
                <div className="item Mobile" href="">
                <div className="leftCard">
                        <Phone className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>+57 313 606 80 22</h3>
                    </div>
                </div>
                <div className="item Mobile" href="">
                <div className="leftCard">
                        <Email className="dscLogo" />
                    </div>
                    <div className="rightCard">
                        <h3>juanpis.martinez27@gmail.com</h3>
                    </div>
                </div>
                
                
             </div>
            </div>
            <div className="right">
                <div className="wholeRight">
                <h2>{translate('contact')}</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="email" name='email' value={toSend.email} onChange={handleChange}/>
                    <textarea placeholder={"msg" + translate('msg')} name='message' value={toSend.message} onChange={handleChange}></textarea>
                    <button type="submit" onClick={()=> setMessage(!message)}>{translate('send msg')}</button>
                    
                </form>
                {message && <span>{translate('thanks msg')}</span>}
                </div>

            </div>

            </div>

            <div className="mapa">
                <img className="mapaImg" src={mapa} alt=""></img>
            </div>

            

            

        </div>
        </I18nPropvider>
    )

}
