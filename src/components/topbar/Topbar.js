import "./topbar.scss"
import logoo from "./logo.png"
import {Mail, Phone} from "@material-ui/icons"
import logob from "./logob.PNG"
import Application from '../button/Switch'

//import {FormattedMessage} from "react-intl";
import { I18nPropvider} from '../../i18nProvider';
//import translate from "../../i18nProvider/translate";



export default function Topbar({menuOpen, setMenuOpen, queMenu, setQueMenu, topbarColor, setTopbarColor, setLanguage, language}) {
    
    
    

    return(
        <I18nPropvider locale={language}>
        <div className={"topbar " + (menuOpen && "active") + queMenu + " " + topbarColor}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> <img src={(menuOpen && queMenu==="amarillo" ? logob : menuOpen && queMenu==="negro"? logoo: menuOpen? logob: !menuOpen && topbarColor==="negro"? logoo: logob)} alt="a" className="logoImage"></img> </a>
                    
                    <div className="itemContainer">

                        <Phone className="icon"/>
                        <span className="basicInfo">+57 313 606 8022 </span>
                        <Mail className= "icon" />
                        <span className="basicInfo">jp.martinezc@uniandes.edu.co</span>
                    </div>

                    
                </div>
                <div className="right">
                    <Application className="switch" setLanguage={setLanguage} language={language}/>
                    <div className="hamburguer" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                    
                </div>
            </div>
        </div>
        </I18nPropvider>
    )


}

