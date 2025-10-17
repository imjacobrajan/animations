import React from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = ({ activeItem, setActiveItem, isOpen, toggleSidebar }) => {
  const menuItems = [
    { id: 'hover-effect', label: 'Hover Contrast' },
  ];

  return (
    <>
      {/* Hamburger Menu Button - Shows when sidebar is closed */}
      {!isOpen && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors shadow-lg"
          aria-label="Open sidebar"
        >
          <Menu size={24} className="text-white" />
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-screen bg-[#0a0a0f] border-r border-gray-800 overflow-y-auto
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          w-64
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold text-white">Jacob Rajan</h1>
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Menu Section */}
        <nav className="p-4">
          <div className="mb-6">
            <div className="space-y-1">
              {menuItems.map((item) => {
                const isActive = activeItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(item.id)}
                    className={`
                      w-full text-left px-3 py-2 rounded-md text-sm
                      transition-all duration-200
                      ${
                        isActive
                          ? 'bg-gray-800 text-white border-l-2 border-purple-500'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;

