import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import HoverContrastCards from './components/HoverContrastCards';

function App() {
  const [activeItem, setActiveItem] = useState('hover-effect');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Sample data for team members
  const teamMembers = [
    {
      name: 'Jane Doe',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop'
    },
    {
      name: 'John Smith',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop'
    },
    {
      name: 'Emily Johnson',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop'
    },
    {
      name: 'Michael Lee',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop'
    }
  ];

  // Render content based on active menu item
  const renderContent = () => {
    switch (activeItem) {
      case 'hover-effect':
        return <HoverContrastCards items={teamMembers} />;

      default:
        return <HoverContrastCards items={teamMembers} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      {/* Sidebar */}
      <Sidebar 
        activeItem={activeItem} 
        setActiveItem={setActiveItem}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main Content */}
      <main className="w-full">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;

