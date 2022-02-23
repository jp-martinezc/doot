import "./portfolioList.scss"


export default function PortfolioList({menuOpen, setMenuOpen, queMenu, setQueMenu, title, active, setSelected, id}) {
    

    return(
        
        <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={
            ()=> setSelected(id)
        }>
            {title}
            
        </li>
    )

}