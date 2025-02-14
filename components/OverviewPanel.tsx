"use client";

import React from "react";

const OverviewPanel: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow overflow-y-auto">
        {/* Example messages / suggestions */}
        <div className="p-2 border-b">
          <span className="font-bold">System:</span> Welcome to the Production Overview.
        </div>
        <div className="p-2 border-b">
          <span className="font-bold">Suggestion:</span> Consider adding more resource nodes.
        </div>
        <div className="p-2 border-b">
          <span className="font-bold">Alert:</span> Operator panel needs attention.
        </div>
      </div>
    </div>
  );
};

export default OverviewPanel;