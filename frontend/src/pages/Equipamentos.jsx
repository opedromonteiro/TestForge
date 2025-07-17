import { useState } from "react";
import { FaSearch, FaBars, FaUser, FaLaptop, FaCog, FaChartBar, FaAngleDown } from "react-icons/fa";

const SidebarIcon = ({ icon }) => (
  <div className="p-4 hover:bg-orange-500 transition-colors cursor-pointer">
    {icon}
  </div>
);

const equipmentData = [
  {
    name: "Equipamento X",
    items: [
      {
        id: "EQ001",
        status: "em uso",
        user: "João Silva",
        date: "2025-07-10"
      },
      {
        id: "EQ002",
        status: "disponível"
      }
    ]
  },
  {
    name: "Equipamento y",
    items: [
      {
        id: "EQ003",
        status: "manutenção"
      }
    ]
  },
  {
    name: "Equipamento z",
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

const AccordionItem = ({ title, items }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-lg border-gray-400">
      <button
        onClick={() => setOpen(!open)}
        className="w-full bg-gray-200  rounded-lg text-left px-4 py-3 flex justify-between items-center hover:bg-orange-200"
      >
        <span>{title}</span>
        <FaAngleDown className={`transform transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
      </button>
      {open && (
        <div className="p-4 bg-gray-100 text-sm text-gray-700 space-y-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border rounded shadow px-4 py-2 hover:bg-orange-50 cursor-pointer"
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
  return (
    <div className="flex h-screen bg-gray-800 text-black">
      {/* Sidebar */}
      <div className="w-16 bg-gray-300 flex flex-col justify-between items-center py-4">
        <div className="space-y-4">
          <SidebarIcon icon={<FaLaptop size={20} />} />
          <SidebarIcon icon={<FaCog size={20} />} />
          <SidebarIcon icon={<FaChartBar size={20} />} />
        </div>
        <SidebarIcon icon={<FaUser size={20} />} />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <div className="bg-white p-4 flex items-center justify-between border-b border-gray-200">
          <div className="flex items-center gap-4">
            <img src="/logo-orange.png" alt="Logo" className="h-10" />
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Buscar..."
              className="border px-2 py-1 text-sm bg-gray-100 focus:outline-none"
            />
            <button className="bg-gray-200 px-3 py-1">
              <FaSearch />
            </button>
            <button className="bg-gray-200 px-3 py-1">
              <FaBars />
            </button>
          </div>
        </div>

        {/* Accordion Section */}
        <div className="p-8 space-y-4 bg-white h-full overflow-y-auto">
          {equipmentData.map((eq, index) => (
            <AccordionItem key={index} title={eq.name} items={eq.items} />
          ))}
        </div>
      </div>
    </div>
  );
}
