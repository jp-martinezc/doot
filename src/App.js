import Intro from "./components/intro/Intro"
import Topbar from "./components/topbar/Topbar"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import "./app.scss"

function App() {
  return (
    <div className="app">
      <Topbar/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
