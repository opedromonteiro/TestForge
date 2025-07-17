import { BsPerson, BsPhone, BsEnvelope, BsLaptop, BsPhone as BsMobile } from 'react-icons/bs';
import NavBar from '../components/NavBar';

const Perfil = () => {
  // Dados do utilizador (substitua por dados reais da sua API)
  const userData = {
    username: 'john_doe',
    id: 'USR-789456',
    email: 'john.doe@example.com',
    telefone: '+351 912 345 678',
    equipamentos: ['Computador', 'Computador']
  };

  return (
    <div className='bg-bggray w-screen min-h-screen'>
        <NavBar/>
    <div className="max-w-4xl  mx-auto p-6">
      <h1 className="text-3xl font-bold text-white mb-28">Perfil</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {/* Cabeçalho do Perfil */}
        <div className="bg-forange p-6 text-white">
          <div className="flex items-center">
            <div className="bg-horange p-3 rounded-full mr-4">
              <BsPerson className="text-2xl" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{userData.username}</h2>
              <p className="text-blue-100">{userData.id}</p>
            </div>
          </div>
        </div>

        {/* Informações do Utilizador */}
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Informações Pessoais</h3>
              
              <div className="flex items-start">
                <BsEnvelope className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800">{userData.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <BsPhone className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-500">Telefone</p>
                  <p className="text-gray-800">{userData.telefone}</p>
                </div>
              </div>
            </div>

            {/* Seção de Equipamentos */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Equipamentos</h3>
              
              {userData.equipamentos.map((equipamento, index) => (
                <div key={index} className="flex items-start">
                  {equipamento === 'Computador' ? (
                    <BsLaptop className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                  ) : (
                    <BsMobile className="text-gray-500 mt-1 mr-3 flex-shrink-0" />
                  )}
                  <div>
                    <p className="text-sm text-gray-500">Equipamento {index + 1}</p>
                    <p className="text-gray-800">{equipamento}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Perfil;