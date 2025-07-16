import BasicLogin from "../Componentes/Login";

function App() {
  return (
    <div className="flex flex-row justify-center items-center bg-bggray">
      <div className=' w-full'>
        <BasicLogin/>
      </div>
      <div className='flex justify-center w-full'>
        <img src="logo512.png" />
      </div>
    </div>
  );
}

export default App;