import "./menu.scss"


export default function Menu({menuOpen, setMenuOpen, queMenu, setQueMenu}) {
    

    return(
        
        <div className={"menu " + (menuOpen && "active") + queMenu} id="menu">

            <ul className="list">
                <li className="i" onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li className="p" onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="w" onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Skills</a>
                </li>
                <li className="f" onClick={()=> setMenuOpen(false)}>
                    <a href="#footer">Contact</a>
                </li>
                
            </ul>

        </div>
    )

}