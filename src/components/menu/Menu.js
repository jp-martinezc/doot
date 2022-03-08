import "./menu.scss"
//import {FormattedMessage} from "react-intl";
import { I18nPropvider } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";



export default function Menu({menuOpen, setMenuOpen, queMenu, language}) {

    
    

    return(
        <I18nPropvider locale={language} className="meh">
        <div className={"menu " + (menuOpen && "active") + queMenu} id="menu">
        
            <ul className="list">
                
                <li className="i" onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li className="p" onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">{translate('Portfolio')}</a>
                </li>
                <li className="w" onClick={()=> setMenuOpen(false)}>
                    <a href="#works">{translate('Skills')}</a>
                </li>
                <li className="f" onClick={()=> setMenuOpen(false)}>
                    <a href="#footer">{translate('Contact')}</a>
                </li>
                
                
            </ul>

        </div>
        </I18nPropvider>
    )

}