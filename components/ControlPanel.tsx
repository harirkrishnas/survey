"use client";

import React from "react";

const ControlPanel: React.FC = () => {
  return (
    <div className="flex items-center justify-around h-full">
      {/* Save Button */}
      <button className="flex flex-col items-center hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-xs">Save</span>
      </button>
      {/* Undo Button */}
      <button className="flex flex-col items-center hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h4l-2-2m2 2l-2 2M21 14v-1a8 8 0 10-8 8h1" />
        </svg>
        <span className="text-xs">Undo</span>
      </button>
      {/* Zoom In Button */}
      <button className="flex flex-col items-center hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="11" y1="8" x2="11" y2="14" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="text-xs">Zoom In</span>
      </button>
      {/* Zoom Out Button */}
      <button className="flex flex-col items-center hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="8" y1="11" x2="14" y2="11" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="text-xs">Zoom Out</span>
      </button>
      {/* Redo Button */}
      <button className="flex flex-col items-center hover:text-blue-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 3h4a2 2 0 012 2v4M9 21H5a2 2 0 01-2-2v-4" />
          <polyline points="10 14 13 11 10 8" />
          <polyline points="14 10 11 13 14 16" />
        </svg>
        <span className="text-xs">Redo</span>
      </button>
    </div>
  );
};

export default ControlPanel;