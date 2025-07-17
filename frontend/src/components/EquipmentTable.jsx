import { Table } from "flowbite-react";

const EquipmentTable = ({ data }) => (
  <div className="overflow-x-auto bg-white rounded-lg shadow">
    <Table hoverable className="text-sm">
      <Table.Head className="bg-gray-200 text-gray-700">
        <Table.HeadCell>Nome</Table.HeadCell>
        <Table.HeadCell>Categoria</Table.HeadCell>
        <Table.HeadCell>Estado</Table.HeadCell>
        <Table.HeadCell>Responsável</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {data.map((item, idx) => (
          <Table.Row key={idx} className="bg-gray-50 hover:bg-gray-100">
            <Table.Cell>{item.name}</Table.Cell>
            <Table.Cell>{item.category}</Table.Cell>
            <Table.Cell>
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  item.status === "Disponível"
                    ? "bg-green-100 text-green-600"
                    : item.status === "Em manutenção"
                    ? "bg-yellow-100 text-yellow-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {item.status}
              </span>
            </Table.Cell>
            <Table.Cell>{item.owner || "—"}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </div>
);
