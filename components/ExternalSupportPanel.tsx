"use client";

import React, { useState } from 'react';

const ExternalSupportPanel: React.FC = () => {
  const [infrastructure, setInfrastructure] = useState<number>(50);
  const [policySupport, setPolicySupport] = useState<number>(50);
  const [weightInfrastructure, setWeightInfrastructure] = useState<number>(1);
  const [weightPolicy, setWeightPolicy] = useState<number>(1);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">External Support</h3>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Infrastructure Quality ({infrastructure}%)
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={infrastructure}
          onChange={(e) => setInfrastructure(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Policy Support ({policySupport}%)
        </label>
        <input
          type="range"
          min="0"
          max="100"
          value={policySupport}
          onChange={(e) => setPolicySupport(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Infrastructure Weight
        </label>
        <input
          type="number"
          value={weightInfrastructure}
          onChange={(e) => setWeightInfrastructure(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-medium mb-1">
          Policy Support Weight
        </label>
        <input
          type="number"
          value={weightPolicy}
          onChange={(e) => setWeightPolicy(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <button className="w-full bg-indigo-600 text-white p-2 rounded hover:bg-indigo-700 transition-colors">
        Save External Support
      </button>
    </div>
  );
};

export default ExternalSupportPanel;