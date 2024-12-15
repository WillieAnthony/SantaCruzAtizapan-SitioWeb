import './assets/css/styles.css';  // Ruta para los estilos
import logo from './images/icono.jpg'; // Imagen movida a `src/images`
import { Routes, Route, Link } from 'react-router-dom';

// Páginas
const Inicio = () => <div id="inicio"><h2>Inicio</h2><p>Contenido de inicio</p></div>;
const Administracion = () => <div id="administracion"><h2>Administración</h2><p>Contenido de administración</p></div>;
const Instituciones = () => <div id="instituciones"><h2>Instituciones</h2><p>Contenido de instituciones</p></div>;
const Tradiciones = () => <div id="tradiciones"><h2>Tradiciones</h2><p>Contenido de tradiciones</p></div>;
const Atractivos = () => <div id="atractivos"><h2>Atractivos Turísticos</h2><p>Contenido de atractivos turísticos</p></div>;
const Fuentes = () => <div id="fuentes"><h2>Fuentes de Empleo</h2><p>Contenido de fuentes de empleo</p></div>;
const Servicios = () => <div id="servicios"><h2>Servicios</h2><p>Contenido de servicios</p></div>;
const Contacto = () => <div id="contacto"><h2>Contacto</h2><p>Contenido de contacto</p></div>;

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
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/administracion">Administración</Link></li>
            <li><Link to="/instituciones">Instituciones</Link></li>
            <li><Link to="/tradiciones">Tradiciones</Link></li>
            <li><Link to="/atractivos">Atractivos Turísticos</Link></li>
            <li><Link to="/fuentes">Fuentes de Empleo</Link></li>
            <li><Link to="/servicios">Servicios</Link></li>
            <li><Link to="/contacto">Contacto</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/administracion" element={<Administracion />} />
          <Route path="/instituciones" element={<Instituciones />} />
          <Route path="/tradiciones" element={<Tradiciones />} />
          <Route path="/atractivos" element={<Atractivos />} />
          <Route path="/fuentes" element={<Fuentes />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
