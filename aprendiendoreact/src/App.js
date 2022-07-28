import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />

      <div className="center">
        <section id="content">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <MiComponente />
          <Peliculas />
        </section>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
