"use client";

import React, { useState } from 'react';

const OperatorPanel: React.FC = () => {
  const [operatorType, setOperatorType] = useState('Sequential');
  const [couplingCoefficient, setCouplingCoefficient] = useState<number>(0);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Operator Settings</h3>
      {/* Operator Type Selector */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Operator Type</label>
        <select
          value={operatorType}
          onChange={(e) => setOperatorType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Sequential">Sequential</option>
          <option value="Additive">Additive</option>
          <option value="Multiplicative">Multiplicative</option>
        </select>
      </div>
      {/* Coupling Coefficient */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Coupling Coefficient</label>
        <input
          type="number"
          value={couplingCoefficient}
          onChange={(e) => setCouplingCoefficient(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>
      <button className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition-colors">
        Save Operator Settings
      </button>
    </div>
  );
};

export default OperatorPanel;