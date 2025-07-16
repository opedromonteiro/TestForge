import NavBar from './NavBar';

function equipamento() {
  return (
    <div className="min-h-screen flex">
      <NavBar />
      <main className="flex-1 bg-gray-100 p-10">
        <h1 className="text-2xl font-bold">Conteúdo Principal</h1>
      </main>
    </div>
  );
}