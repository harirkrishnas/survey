"use client";

import React, { useState } from 'react';

const DigitalPanel: React.FC = () => {
  const [cloudEffectiveness, setCloudEffectiveness] = useState<number>(50);
  const [aiPerformance, setAiPerformance] = useState<number>(50);
  const [isEcommerceEnabled, setIsEcommerceEnabled] = useState<boolean>(false);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Digital Capability</h3>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Cloud Tool Effectiveness ({cloudEffectiveness}%)
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={cloudEffectiveness}
          onChange={(e) => setCloudEffectiveness(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          AI Performance ({aiPerformance}%)
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={aiPerformance}
          onChange={(e) => setAiPerformance(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4 flex items-center">
        <label className="block font-medium mr-2">E-commerce Integration</label>
        <input
          type="checkbox"
          checked={isEcommerceEnabled}
          onChange={(e) => setIsEcommerceEnabled(e.target.checked)}
          className="h-4 w-4"
        />
      </div>
      <button className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors">
        Save Digital Settings
      </button>
    </div>
  );
};

export default DigitalPanel;