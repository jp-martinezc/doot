import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import Works from "./components/works/Works"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from "react"
//import {FormattedMessage} from "react-intl";
import { LOCALES } from './i18nProvider';
//import translate from "./i18nProvider/translate";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  const [queMenu,setQueMenu] = useState("amarillo");
  const [topbarColor,setTopbarColor] = useState("negro");
  const [language,setLanguage] = useState(LOCALES.ENGLISH);
  console.log(language);
 
  return (
    
    <div className="app">
      
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor} setLanguage={setLanguage} language={language}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} language={language}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor} language={language}/>
        <Portfolio menuOpen={menuOpen} setMenuOpen={setMenuOpen} queMenu={queMenu} setQueMenu={setQueMenu} topbarColor={topbarColor} setTopbarColor={setTopbarColor} language={language}/>
        <Works queMenu={queMenu} setQueMenu={setQueMenu} setMenuOpen={setMenuOpen} setTopbarColor={setTopbarColor} language={language}/>
        <Footer language={language}/>
      </div>
    </div>
    
  );
}

export default App;
