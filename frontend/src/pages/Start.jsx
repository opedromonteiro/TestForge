import BasicLogin from "../components/Login";
import NavBar from "../components/NavBar";

function App() {
  return (
    <div className="flex flex-row justify-center items-center bg-bggray min-h-screen">
      <div className=''>
        <NavBar/>
      </div>
      <div className='flex justify-center w-full'>
        <img src="logo512.png" />
      </div>
    </div>
  );
}

export default App;