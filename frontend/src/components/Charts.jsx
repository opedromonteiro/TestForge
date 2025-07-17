import { Doughnut, Bar } from "react-chartjs-2";

export const Charts = ({ data }) => {
  const categoryCount = data.reduce((acc, cur) => {
    acc[cur.category] = (acc[cur.category] || 0) + 1;
    return acc;
  }, {});

  const statusByCategory = {
    Computador: { Disponível: 0, "Em uso": 0, "Em manutenção": 0 },
    Portátil: { Disponível: 0, "Em uso": 0, "Em manutenção": 0 },
    Tablet: { Disponível: 0, "Em uso": 0, "Em manutenção": 0 },
  };

  data.forEach((item) => {
    statusByCategory[item.category][item.status]++;
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">
          Distribuição por Categoria
        </h3>
        <Doughnut
          data={{
            labels: Object.keys(categoryCount),
            datasets: [
              {
                data: Object.values(categoryCount),
                backgroundColor: ["#f97316", "#9ca3af", "#e5e7eb"], // laranja, cinza médio, cinza claro
              },
            ],
          }}
        />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-sm font-semibold mb-2 text-gray-600">
          Estado por Categoria
        </h3>
        <Bar
          data={{
            labels: Object.keys(statusByCategory),
            datasets: [
              {
                label: "Disponível",
                data: Object.values(statusByCategory).map((c) => c.Disponível),
                backgroundColor: "#22c55e", // verde
              },
              {
                label: "Em uso",
                data: Object.values(statusByCategory).map((c) => c["Em uso"]),
                backgroundColor: "#ef4444", // vermelho
              },
              {
                label: "Em manutenção",
                data: Object.values(statusByCategory).map((c) => c["Em manutenção"]),
                backgroundColor: "#facc15", // amarelo
              },
            ],
          }}
          options={{
            plugins: {
              legend: { labels: { color: "#4b5563" } },
            },
            scales: {
              x: { ticks: { color: "#4b5563" } },
              y: { ticks: { color: "#4b5563" } },
            },
          }}
        />
      </div>
    </div>
  );
};