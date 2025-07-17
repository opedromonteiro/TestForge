import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/Start';
import EquipamentosPage from './pages/Equipamentos';
import Perfil from './pages/Perfil';
import SoftwarePage from './pages/Software';
import DashboardPage from './pages/Dashboard';
import './index.css';

export default function App() {
  return (
    <Router>
      <Routes>
          <Route index element={<StartPage />} />
          <Route path="/" element={<StartPage />} />
          <Route path="equipamentos" element={<EquipamentosPage />} />
          <Route path="perfil" element={<Perfil />} />
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
    
  </React.StrictMode>
);