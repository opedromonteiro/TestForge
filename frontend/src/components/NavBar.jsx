import { useNavigate } from "react-router-dom";
import { FaUser, FaLaptop, FaCog, FaChartBar, FaHome } from "react-icons/fa";

const SidebarIcon = ({ icon, label, onClick, isActive = false }) => (
  <div
    className={`p-4 hover:bg-orange-500 transition-colors rounded-lg cursor-pointer relative group ${
      isActive ? "bg-orange-500" : ""
    }`}
    onClick={onClick}
  >
    {icon}
    <span className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      {label}
    </span>
  </div>
);

const NavBar = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-16 bg-loggray flex flex-col h-screen fixed left-0 top-0 py-4 rounded-r-lg">
      
      <div className="flex-1 flex  flex-col items-center space-y-4">
        <SidebarIcon 
          icon={<FaHome size={20} className="text-white" />} 
          label="Início" 
          onClick={() => navigate("/")} 
        />
        <SidebarIcon 
          icon={<FaLaptop size={20} className="text-white" />} 
          label="Equipamentos" 
          onClick={() => navigate("/Equipamentos")} 
        />
        <SidebarIcon 
          icon={<FaCog size={20} className="text-white" />} 
          label="Software" 
          onClick={() => navigate("/Software")} 
        />
        <SidebarIcon 
          icon={<FaChartBar size={20} className="text-white" />} 
          label="Dashboard" 
          onClick={() => navigate("/Dashboard")} 
        />
      </div>

      
      <div className="pb-4 flex justify-center">
        <SidebarIcon 
          icon={<FaUser size={20} className="text-white" />} 
          label="Perfil" 
          onClick={() => navigate("/Perfil")} 
        />
      </div>
    </div>
  );
};

export default NavBar;