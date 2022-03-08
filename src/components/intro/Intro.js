import "./intro.scss"
import ParticlesBg from 'particles-bg'
import {ArrowDropDown} from "@material-ui/icons"
import { init } from 'ityped'
import {useEffect, useRef} from "react";
import yo from '../../images/yo.png';
import yoAsustado from '../../images/yoAsustado.png';

//import {FormattedMessage} from "react-intl";
import { I18nPropvider, LOCALES } from '../../i18nProvider';
import translate from "../../i18nProvider/translate";


let config ={
    color: "#FFB221",
    num: 2,
    zIndex: 2,
    type: "cobweb"
    
}


let bgg ={
position: "absolute",
zIndex: 1,
top: 0,
left: 0
}

export default function Intro({menuOpen, setMenuOpen, queMenu, setQueMenu, setTopbarColor, language}) {

    const textRef = useRef();
    const textRef2 = useRef();

    const whatAmI = [
        'Developer', 'Software Engineer', 'Designer', 'Dog Lover' 
    ];
    const queSoy = [
        'Desarrollador', 'Ingeniero de Sistemas', 'Diseñador', 'Amante de Perros' 
    ];



    useEffect(()=>{
        
        init(textRef.current, { 
            showCursor: false, 
            strings: whatAmI
            
            
        })
        init(textRef2.current, { 
            showCursor: false, 
            strings: queSoy
            
            
        })  
        
       

    },[])

    return(
        <I18nPropvider locale={language}>
        <div className={"intro " + (menuOpen && "active")} id="intro" onMouseOver={()=> a()} onTouchMove={()=> a()} onTouchMoveCapture={()=> a()}> 

        <ParticlesBg config={config} type="cobweb" color="#fcde67" num={30} bg={bgg} />

        <div className="left">
            <div className="imgContainer">
                <img className={"yo " + (menuOpen && "active") }  alt="" src={menuOpen? yoAsustado: yo}></img>

            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>{translate('hello')}</h2>
                <h1>Juan Pablo Martinez</h1>
                <h3 className={"en " + language}>{translate('im')}  <span ref={textRef}></span> </h3> 
                <h3 className={"es " + language}>{translate('im')}  <span ref={textRef2}></span> </h3> 
            </div>

        <a href="#intro" className="downlink">
            <ArrowDropDown className="down" />
        </a>
           
            
           
               

            
            </div>
        </div>
        </I18nPropvider>
    )

    function a(){
        setQueMenu("amarillo");
        setTopbarColor("negro");
    }

}