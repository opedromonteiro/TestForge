import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoStatsChartSharp } from "react-icons/io5";
 import { PiComputerTower } from "react-icons/pi";
 import { MdComputer } from "react-icons/md";
 import { FaUserAlt } from "react-icons/fa"; 

const items = [
{ icon: <FaUserAlt />, label: 'Perfil' },
{ icon: <MdComputer/>, label: 'Equipamentos' },
{ icon: <PiComputerTower/>, label: 'Software' },
{ icon: <IoStatsChartSharp />, label: 'Dashboard' },
];

export default function NavBar() {
const [activeIndex, setActiveIndex] = useState(null);

return (
<nav className="fixed top-0 left-0 h-full w-20 bg-fire flex flex-col items-center py-6 space-y-10 shadow-lg text-white">
  {items.map((item, index) => (
    <NavItem
      key={index}
      icon={item.icon}
      label={item.label}
      isActive={activeIndex === index}
      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
    />
  ))}
</nav>
);
}

function NavItem({ icon, label, isActive, onClick }) {
  return (
    <div
      className="relative m-2 flex flex-col items-center cursor-pointer hover:text-orange-800 transition-all"
      onClick={onClick}
    >
      {icon}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 5 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-full ml-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
