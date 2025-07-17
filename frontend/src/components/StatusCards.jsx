const StatusCards = ({ stats }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    {stats.map((stat) => (
      <div key={stat.label} className="p-4 bg-gray-200 rounded-lg shadow text-center">
        <p className="text-gray-600 text-sm">{stat.label}</p>
        <p className="text-2xl font-bold text-orange-500">{stat.value}</p>
      </div>
    ))}
  </div>
);