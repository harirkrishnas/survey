"use client";

import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

type ProcessNodeData = {
  label: string;
  level: 'Process' | 'Activity' | 'Action';
  department?: string;
};

type ProcessNodeProps = {
  data: ProcessNodeData;
};

const ProcessNode: React.FC<ProcessNodeProps> = ({ data }) => {
  const [level, setLevel] = useState<ProcessNodeData['level']>(data.level);
  const [resourceUsage, setResourceUsage] = useState<number>(0);
  const [efficiency, setEfficiency] = useState<number>(0);

  return (
    <div className="p-2 bg-white rounded shadow border w-64">
      {/* Connection handles */}
      <Handle type="target" position={Position.Top} />
      
      {/* Process Header */}
      <div className="mb-2 border-b pb-1">
        <div className="font-bold text-lg flex justify-between items-center">
          {data.label}
          <span className="text-gray-500 text-sm">{level}</span>
        </div>
      </div>
      
      {/* Level Selector */}
      <div className="mb-2">
        <label className="block text-xs font-medium">Change Level</label>
        <select
          value={level}
          onChange={(e) => setLevel(e.target.value as ProcessNodeData['level'])}
          className="w-full p-1 text-sm border rounded"
        >
          <option value="Process">Process</option>
          <option value="Activity">Activity</option>
          <option value="Action">Action</option>
        </select>
      </div>
      
      {/* Resource Input */}
      <div className="mb-2">
        <label className="block text-xs font-medium">Resource Usage</label>
        <input
          type="number"
          value={resourceUsage}
          onChange={(e) => setResourceUsage(Number(e.target.value))}
          className="w-full p-1 text-sm border rounded"
        />
      </div>
      
      {/* Efficiency Input */}
      <div className="mb-2">
        <label className="block text-xs font-medium">Efficiency (%)</label>
        <input
          type="number"
          value={efficiency}
          onChange={(e) => setEfficiency(Number(e.target.value))}
          className="w-full p-1 text-sm border rounded"
        />
      </div>
      
      {/* Placeholders for additional panels */}
      <div className="mb-2 text-xs text-gray-500">[Resource Assignment Panel]</div>
      <div className="mb-2 text-xs text-gray-500">[Operator Settings Panel]</div>
      
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default ProcessNode;