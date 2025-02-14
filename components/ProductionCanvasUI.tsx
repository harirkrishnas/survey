"use client";

import React from "react";
import LeftSidebar from "./LeftSidebar"; // Navigation for production panels
import ProductionDrawingBoard from "./ProductionDrawingBoard"; // Main interactive canvas
import OverviewPanel from "./OverviewPanel"; // Overview/suggestions area (chat-like)
import ControlPanel from "./ControlPanel"; // Bottom control bar (save, undo, zoom, etc.)

const ProductionCanvasUI: React.FC = () => {
  return (
    // Added h-full to ensure the UI fills its parent's height
    <div className="flex flex-col w-full h-full">
      {/* Main Area */}
      <div className="flex flex-grow">
        {/* Left Sidebar: navigation/toolbox */}
        <div className="w-1/6 border-r p-2">
          <LeftSidebar />
        </div>
        {/* Center: Interactive Production Drawing */}
        <div className="flex-grow relative bg-gray-50">
          <ProductionDrawingBoard />
        </div>
        {/* Right Sidebar: Overview/Suggestions */}
        <div className="w-1/4 border-l p-2">
          <OverviewPanel />
        </div>
      </div>
      {/* Bottom Control Panel */}
      <div className="h-16 border-t p-2">
        <ControlPanel />
      </div>
    </div>
  );
};

export default ProductionCanvasUI;