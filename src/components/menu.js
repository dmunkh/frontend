
import React from 'react';

const VerticalMenu = () => {
  return (
    <div className="bg-gray-800 h-16 flex items-center justify-between px-4">
    
    <div className="flex">
      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
        Home
      </a>
      <a href="/pages/goods" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
        Бараа
      </a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
        Services
      </a>
      <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md">
        Contact
      </a>
    </div>
  </div>
  );
};

export default VerticalMenu;