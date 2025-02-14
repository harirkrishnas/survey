"use client";

import React, { useState } from 'react';

const resourceTypes = ['Human', 'Machinery', 'Raw Materials', 'Digital Services'];

const ResourcePanel: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>(resourceTypes[0]);
  const [quantity, setQuantity] = useState<number>(0);
  const [skillLevel, setSkillLevel] = useState<number>(0);
  const [cost, setCost] = useState<number>(0);
  const [coefficient, setCoefficient] = useState<number>(1);

  return (
    <div>
      <h3 className="text-lg font-bold mb-4">Resource Input</h3>
      
      {/* Resource Type Selector */}
      <div className="mb-4">
        <label className="block font-medium mb-1">Resource Type</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="w-full p-2 border rounded"
        >
          {resourceTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      
      {/* Intrinsic Properties */}
      <div className="mb-4 border p-2 rounded">
        <h4 className="font-semibold mb-2">Intrinsic Properties</h4>
        <div className="mb-2">
          <label className="block text-xs font-medium">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-2">
          <label className="block text-xs font-medium">Skill Level / Capacity</label>
          <input
            type="number"
            value={skillLevel}
            onChange={(e) => setSkillLevel(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      
      {/* Extrinsic Properties */}
      <div className="mb-4 border p-2 rounded">
        <h4 className="font-semibold mb-2">Extrinsic Properties</h4>
        <div className="mb-2">
          <label className="block text-xs font-medium">Cost</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      
      {/* Contribution Function Configuration */}
      <div className="mb-4 border p-2 rounded">
        <h4 className="font-semibold mb-2">Contribution Function</h4>
        <div className="mb-2">
          <label className="block text-xs font-medium">
            Coupling Coefficient (α, β, γ) <span className="text-gray-500 text-xs">(Live preview: {coefficient})</span>
          </label>
          <input
            type="number"
            value={coefficient}
            onChange={(e) => setCoefficient(Number(e.target.value))}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors">
        Save Resource
      </button>
    </div>
  );
};

export default ResourcePanel;