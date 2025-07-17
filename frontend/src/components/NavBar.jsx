import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLaptop, FaCog, FaChartBar } from "react-icons/fa";

const SidebarIcon = ({ icon, label, onClick }) => (
  <div
    className="p-4 hover:bg-orange-500 transition-colors cursor-pointer relative group"
    onClick={onClick}
  >
    {icon}
    <span className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
      {label}
    </span>
  </div>
);

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-16 bg-gray-300 flex flex-col justify-between items-center py-4">
      <div className="space-y-4">
        <SidebarIcon icon={<FaLaptop size={20} />} label="Equipamentos" onClick={() => navigate("/pages/Equipamentos")} />
        <SidebarIcon icon={<FaCog size={20} />} label="Software" onClick={() => navigate("/pages/Software")} />
        <SidebarIcon icon={<FaChartBar size={20} />} label="Dashboard" onClick={() => navigate("/pages/Dashboard")} />
      </div>
      <SidebarIcon icon={<FaUser size={20} />} label="Perfil" onClick={() => navigate("/pages/Perfil")} />
    </div>
  );
};

export default NavBar;