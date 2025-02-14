"use client";

import React, { useState } from 'react';

const ExpertPanel: React.FC = () => {
  const [simulationParam, setSimulationParam] = useState<number>(50);
  const [expertMode, setExpertMode] = useState<boolean>(false);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Expert Calibration</h3>
      <div className="flex items-center mb-4">
        <span className="mr-2">Expert Mode:</span>
        <input
          type="checkbox"
          checked={expertMode}
          onChange={(e) => setExpertMode(e.target.checked)}
          className="h-4 w-4"
        />
      </div>
      {expertMode && (
        <>
          <div className="mb-4">
            <label className="block font-medium mb-1">
              Simulation Parameter ({simulationParam})
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={simulationParam}
              onChange={(e) => setSimulationParam(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <button className="w-full bg-orange-600 text-white p-2 rounded hover:bg-orange-700 transition-colors">
            Run Calibration
          </button>
        </>
      )}
    </div>
  );
};

export default ExpertPanel;