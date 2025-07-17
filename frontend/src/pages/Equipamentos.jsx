import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { FaSearch, FaBars, FaUser, FaLaptop, FaCog, FaChartBar, FaAngleDown } from "react-icons/fa";

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

const equipmentData = [
  {
    name: "Computador",
    items: [
      {
        id: "EQ002",
        status: "disponível"
      }
    ]
  },
  {
    name: "Portátil",
    items: [
      {
        id: "EQ003",
        status: "manutenção"
      }
    ]
  },
  {
    name: "Tablet",
    items: [
      {
        id: "EQ004",
        status: "em uso",
        user: "Maria Oliveira",
        date: "2025-07-12"
      }
    ]
  }
];

const statusColors = {
  "disponível": "bg-green-100 border-green-500",
  "em uso": "bg-red-100 border-red-500",
  "manutenção": "bg-orange-100 border-orange-500"
};

const AccordionItem = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-400 rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-200 text-left px-4 py-3 flex justify-between items-center hover:bg-orange-200"
      >
        <span>{title}</span>
        <FaAngleDown className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <div className="p-4 bg-gray-100 text-sm text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`border rounded-lg shadow px-4 py-2 hover:bg-orange-50 cursor-pointer ${statusColors[item.status]}`}
            >
              <p><strong>Nome:</strong> {title}</p>
              <p><strong>ID:</strong> {item.id}</p>
              <p><strong>Status:</strong> {item.status}</p>
              {item.status === "em uso" && (
                <>
                  <p><strong>Usuário:</strong> {item.user}</p>
                  <p><strong>Data de retirada:</strong> {item.date}</p>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default function EquipmentUI() {
  const [showFilter, setShowFilter] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const navigate = useNavigate();

  const filteredData = filter === "Todos"
    ? equipmentData
    : equipmentData.filter(eq => eq.name.toLowerCase() === filter.toLowerCase());

  return (
    <div className="flex h-screen bg-gray-200 text-black">
      {/* Sidebar */}
      <NavBar></NavBar>
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-gray-400 p-4 flex items-center justify- border-b border-gray-800 m-4 rounded-b-lg h-2/6">
          <div className="flex items-center gap-2">
            <img src="logo512.png"alt="Logo" className="h-1/2" />
          </div>
          <div className="flex gap-2 items-center w-2xl">
            <input
              type="text"
              placeholder="Buscar..."
              className="border px-2 py-1 text-sm bg-gray-100 focus:outline-none rounded"
            />
            <button className="bg-gray-200 px-3 flex justify-center py-1 rounded">
              <FaSearch />
            </button>
            <button
              className="bg-gray-200 px-3 py-1 rounded"
              onClick={() => setShowFilter(!showFilter)}
            >
              <FaBars />
            </button>
          </div>
        </div>

        {/* Filter dropdown */}
        {showFilter && (
          <div className="bg-white border border-gray-300 rounded-lg p-4 m-4 shadow">
            <label className="block mb-2 font-medium">Filtrar por tipo:</label>
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="border px-3 py-2 rounded w-full bg-gray-100"
            >
              <option>Todos</option>
              <option>Computador</option>
              <option>Portátil</option>
              <option>Tablet</option>
            </select>
          </div>
        )}

        {/* Accordion Section */}
        <div className="p-8 space-y-4 bg-gray-100 h-full overflow-y-auto rounded-t-lg">
          {filteredData.map((eq, index) => (
            <AccordionItem key={index} title={eq.name} items={eq.items} />
          ))}
        </div>
      </div>
    </div>
  );
}
