import "./assets/css/App.css";

import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import SeccionPrueba from "./components/SeccionPruebas";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <div className="center">
        <SeccionPrueba />
        <Sidebar />
        <div className="clearFix"></div>
      </div>
      {/* END DIV CENTER */}
      <Footer />
    </div>
  );
}

export default App;
