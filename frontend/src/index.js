import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './Paginas/Start';
import EquipamentosPage from './Paginas/Equipamentos';
import PerfilPage from './Paginas/Perfil';
import SoftwarePage from './Paginas/Software';
import DashboardPage from './Paginas/Dashboard';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route index element={<StartPage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="equipamentos" element={<EquipamentosPage />} />
          <Route path="perfil" element={<PerfilPage />} />
          <Route path="software" element={<SoftwarePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);