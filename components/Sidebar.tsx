import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Process Design', href: '/production' },
    { name: 'Resource Input (Quantos)', href: '/resources' },
    { name: 'Operator & Coupling Settings', href: '/operators' },
    { name: 'Digital Capability', href: '/digital' },
    { name: 'External Support', href: '/external' },
    { name: 'Expert Calibration/Optimization', href: '/expert' },
    { name: 'Simulation/Overview Dashboard', href: '/overview' },
  ];

  return (
    <aside className="bg-gray-900 text-white w-64 space-y-2 p-4 fixed top-16 bottom-0 left-0 overflow-y-auto">
      {menuItems.map((item) => (
        <Link key={item.name} href={item.href}>
          <a className="block p-2 hover:bg-gray-700 rounded">{item.name}</a>
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;