import NavBar from '../components/NavBar';

function equipamento() {
  return (
    <div className="min-h-screen flex">
      <NavBar />
      <main className="flex flex-col bg-gray-100 p-10">
        <div className="m-2 rounded-lg  border-none h-40 ">

        </div>
        <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
      </main>
    </div>
  );
}
export default equipamento;