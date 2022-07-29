import "./assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPruebas from "./components/SeccionPruebas";
import Peliculas from "./components/Peliculas";
import Router from "./Router";

function App() {

  var buttonString = "IR AL BLOG"
  return (
    <div className="App">
      <Header />
      <Slider 
        title = "Bienvenido al curso de React para JavaScript" //Exporta como propiedad al objeto en cuestion
        btn = {buttonString}
      />
      <div className="center">
        <Router/>
        {/*<Peliculas />*/}
        <Sidebar />
        <div className="clearFix"></div>
      </div>
      {/* END DIV CENTER */}
      <Footer />
    </div>
  );
}

export default App;
