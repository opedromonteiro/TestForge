import { useState } from "react";
import { FaSignInAlt, FaTimes } from "react-icons/fa";
import Login from "./Login";
import { PiSignInFill } from "react-icons/pi";

const StartSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`fixed left-0 top-0 h-screen bg-loggray transition-all duration-300 ease-in-out ${isExpanded ? "w-login" : "w-16"}`}>
      <div className="flex flex-col h-full py-4">
        <div className="p-4 mx-2 hover:bg-orange-500 w-icon transition-colors rounded-lg cursor-pointer relative group" onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <FaTimes className="text-white text-xl" />
          ) : (
            <PiSignInFill className="text-white text-2xl" />
          )}
        </div>

        {isExpanded && (
          <div className="flex justify-center overflow-y-auto">
            
            <Login />
          </div>
        )}
      </div> 
    </div>
  );
};

export default StartSidebar;