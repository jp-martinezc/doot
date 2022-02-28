import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import Drawings from "./components/drawings/Drawings"
import Works from "./components/works/Works"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [queMenu,setQueMenu] = useState("amarillo");
  const [topbarColor,setTopbarColor] = useState("negro");
 
  return (
    <div className="app">
      
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor}/>
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor}/>
        <Works queMenu={queMenu} setQueMenu={setQueMenu} setMenuOpen={setMenuOpen} setTopbarColor={setTopbarColor}/>
        
        <Drawings/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
