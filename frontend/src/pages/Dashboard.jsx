// import mockData from "../data/mockData";
// import EquipmentTable from "../components/EquipmentTable";
// import StatusCards from "../components/StatusCards";
// import { Charts } from "../components/Charts";

// const Dashboard = () => {
//   const stats = [
//     { label: "Total", value: mockData.length },
//     { label: "Disponíveis", value: mockData.filter(e => e.status === "Disponível").length },
//     { label: "Em uso", value: mockData.filter(e => e.status === "Em uso").length },
//   ];

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen space-y-6">
//       <h1 className="text-xl font-bold text-gray-700 mb-4">Painel de Equipamentos</h1>
//       <StatusCards stats={stats} />
//       <Charts data={mockData} />
//       <EquipmentTable data={mockData} />
//     </div>
//   );
// };

// export default Dashboard;