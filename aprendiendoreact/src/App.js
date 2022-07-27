import logo from "./assets/images/logo.svg";
import "./assets/css/App.css";
import MiComponente from "./components/MiComponente";
import Peliculas from "./components/Peliculas";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

      <Header/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MiComponente />
        <Peliculas />
      </header>
    </div>
  );
}

export default App;
