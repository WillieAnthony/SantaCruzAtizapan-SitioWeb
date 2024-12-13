import './assets/css/styles.css';  // Ruta para los estilos
import logo from './images/icono.jpg'; // Imagen movida a `src/images`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <img src={logo} className="icono" alt="Ícono" />
          <h1>Santa Cruz Atizapán</h1>
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#administracion">Administración</a></li>
            <li><a href="#instituciones">Instituciones</a></li>
            <li><a href="#tradiciones">Tradiciones</a></li>
            <li><a href="#atractivos">Atractivos Turísticos</a></li>
            <li><a href="#fuentes">Fuentes de Empleo</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
