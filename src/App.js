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
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Drawings/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
