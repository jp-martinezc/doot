import "./intro.scss"
import ParticlesBg from 'particles-bg'
import {ArrowDropDown} from "@material-ui/icons"
import { init } from 'ityped'
import {useEffect, useRef} from "react";
import yo from '../../images/yo.png';
import yoAsustado from '../../images/yoAsustado.png';


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

export default function Intro({menuOpen, setMenuOpen, queMenu, setQueMenu, setTopbarColor}) {

    const textRef = useRef();

    useEffect(()=>{

        init(textRef.current, { 
            showCursor: false, 
            strings: ['Developer', 'Software Engineer', 'Designer', 'Dog Lover' ],
            
            
        })

    },[])

    return(
        <div className={"intro " + (menuOpen && "active")} id="intro" onMouseOver={()=> a()} onTouchMove={()=> a()} onTouchMoveCapture={()=> a()}> 

        <ParticlesBg config={config} type="cobweb" color="#fcde67" num={30} bg={bgg} />

        <div className="left">
            <div className="imgContainer">
                <img className={"yo " + (menuOpen && "active") }  alt="" src={menuOpen? yoAsustado: yo}></img>

            </div>
        </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi! i'm</h2>
                <h1>Juan Pablo Martinez</h1>
                <h3>im a <span ref={textRef}></span> </h3> 
            </div>

        <a href="#intro" className="downlink">
            <ArrowDropDown className="down" />
        </a>
           
            
           
               

            
            </div>
        </div>
    )

    function a(){
        setQueMenu("amarillo");
        setTopbarColor("negro");
    }

}