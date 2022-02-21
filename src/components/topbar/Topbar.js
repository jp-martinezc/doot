import "./topbar.scss"
import logoo from "./logo.png"
import {Mail, Phone} from "@material-ui/icons"
import logob from "./logob.PNG"


export default function Topbar({menuOpen, setMenuOpen}) {

    return(
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo"> <img src={(menuOpen ? logob : logoo)} alt="a" className="logoImage"></img> </a>
                    
                    <div className="itemContainer">

                        <Phone className="icon"/>
                        <span className="basicInfo">+57 313 606 8022 </span>
                        <Mail className= "icon" />
                        <span className="basicInfo">jp.martinezc@uniandes.edu.co</span>
                    </div>

                    
                </div>
                <div className="right">
                    <div className="hamburguer" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>
            </div>
        </div>
    )


}

