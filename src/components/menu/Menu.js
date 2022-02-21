import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {

    return(
        <div className={"menu " + (menuOpen && "active")} id="menu">

            <ul className="list">
                <li className="i" onClick={()=> setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li className="p" onClick={()=> setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li className="w" onClick={()=> setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>
                <li className="d" onClick={()=> setMenuOpen(false)}>
                    <a href="#drawings">Drawings</a>
                </li>
                <li className="f" onClick={()=> setMenuOpen(false)}>
                    <a href="#footer">Contact</a>
                </li>
            </ul>

        </div>
    )

}