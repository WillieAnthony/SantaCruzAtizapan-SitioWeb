import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales
import App from './App'; // Componente principal de la aplicación

// Seleccionar el contenedor con el ID 'root'
const container = document.getElementById('root');

// Crear el punto de entrada de React en el contenedor
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("No se encontró un contenedor con el ID 'root'. Verifica tu archivo index.html.");
}
