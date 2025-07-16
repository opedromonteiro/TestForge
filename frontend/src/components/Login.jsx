import { useState } from 'react';

export default function BasicLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Por favor, preencha ambos os campos');
      return;
    }
    
    console.log('Tentativa de login:', { username, password });
    
    setError('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-loggray p-8 rounded-lg shadow-md w-80">
        <h1 className="text-xl font-bold mb-6 text-center">Login</h1>
        {error && (
          <div className="mb-4 p-2 bg-red-100 text-red-700 text-sm rounded">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username"></label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Username"
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1" htmlFor="password"></label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-forange text-white py-2 px-4 rounded hover:bg-horange transition"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}