"use client";

import React, { useState, useCallback } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Background,
  Controls,
  Connection,
  Edge,
  Node,
  MarkerType,
} from 'reactflow';
import 'reactflow/dist/style.css';
import ProcessNode from './ProcessNode';
import DepartmentHeader from './DepartmentHeader';

const departments = ['Upstream', 'Core Production', 'Downstream'];

const initialNodes: Node[] = [
  {
    id: '1',
    type: 'processNode',
    position: { x: 50, y: 150 },
    data: { label: 'Concept Design', level: 'Process', department: 'Upstream' },
  },
  {
    id: '2',
    type: 'processNode',
    position: { x: 350, y: 350 },
    data: { label: 'Manufacturing', level: 'Activity', department: 'Core Production' },
  },
  {
    id: '3',
    type: 'processNode',
    position: { x: 650, y: 550 },
    data: { label: 'Packaging & Distribution', level: 'Action', department: 'Downstream' },
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
  },
];

const nodeTypes = {
  processNode: ProcessNode,
};

const SwimlaneCanvas: React.FC = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const addNode = () => {
    const newNode: Node = {
      id: (nodes.length + 1).toString(),
      type: 'processNode',
      position: { x: Math.random() * 800, y: Math.random() * 600 },
      data: {
        label: `New Process ${nodes.length + 1}`,
        level: 'Action',
        department: departments[Math.floor(Math.random() * departments.length)],
      },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <ReactFlowProvider>
      <div className="relative" style={{ width: '100%', height: '100%' }}>
        {/* Render swimlane headers */}
        <div className="absolute inset-0 pointer-events-none">
          {departments.map((dept, idx) => (
            <div
              key={dept}
              className="absolute left-0 right-0"
              style={{ top: `${(idx * 33.33).toFixed(2)}%`, height: '33.33%', borderBottom: '1px dashed gray' }}
            >
              <DepartmentHeader initialDepartment={dept} />
            </div>
          ))}
        </div>
        <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} nodeTypes={nodeTypes} fitView>
          <Background color="#aaa" gap={16} />
          <Controls />
        </ReactFlow>
        <button
          onClick={addNode}
          className="absolute bottom-4 left-4 p-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors z-10"
        >
          Add Node
        </button>
      </div>
    </ReactFlowProvider>
  );
};

export default SwimlaneCanvas;