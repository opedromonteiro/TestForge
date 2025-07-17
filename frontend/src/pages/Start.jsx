import BasicLogin from "../components/Login";
import NavBar from "../components/NavBar";
import StartSidebar from "../components/StartSideBar";

function App() {
  return (
    <div className="flex flex-row justify-center items-center bg-bggray min-h-screen">
      <div className='flex'>
        <StartSidebar/> {/* to be fixed */}
      </div>
      <div className='flex justify-center w-full'>
        <img src="logo512.png" />
      </div>
    </div>
  );
}

export default App;