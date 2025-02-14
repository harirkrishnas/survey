"use client";

import React from "react";

const navItems = [
  {
    label: "Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4v11H3zM17 3h4v18h-4zM10 14h4v7h-4z" />
      </svg>
    ),
  },
  {
    label: "Resource",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12l9-5-9-5-9 5 9 5z" />
      </svg>
    ),
  },
  {
    label: "Operator",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4M8 15l4 4 4-4" />
      </svg>
    ),
  },
  {
    label: "Digital",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    ),
  },
  {
    label: "External",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m2 4h1m-1-4H9m3 0v-5a4 4 0 11-8 0v5" />
      </svg>
    ),
  },
  {
    label: "Expert",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
      </svg>
    ),
  },
];

const LeftSidebar: React.FC = () => {
  return (
    <nav className="space-y-4">
      {navItems.map((item, index) => (
        <a key={index} href="#" className="flex items-center space-x-2 hover:text-blue-500">
          <span>{item.icon}</span>
          <span className="text-sm">{item.label}</span>
        </a>
      ))}
    </nav>
  );
};

export default LeftSidebar;