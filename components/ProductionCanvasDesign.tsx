"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ResourcePanel from './ResourcePanel';
import OperatorPanel from './OperatorPanel';
import DigitalPanel from './DigitalPanel';
import ExternalSupportPanel from './ExternalSupportPanel';
import ExpertPanel from './ExpertPanel';
import OverviewPanel from './OverviewPanel';
import SimulationWrapper from './SimulationWrapper';

// Dynamically import the SwimlaneCanvas (browser-only)
const SwimlaneCanvas = dynamic(() => import('./SwimlaneCanvas'), { ssr: false });

const ProductionCanvasDesign: React.FC = () => {
  const [activePanel, setActivePanel] = useState<
    'resource' | 'operator' | 'digital' | 'external' | 'expert' | 'overview'
  >('resource');

  return (
    <div className="p-4 space-y-4">
      {/* Main Content: Canvas and Panels in a responsive two-column layout */}
      <div className="flex flex-col md:flex-row gap-4">
        {/* Left: Production Canvas */}
        <div className="md:w-2/3 border rounded overflow-hidden">
          <SwimlaneCanvas />
        </div>
        {/* Right: Tabbed Panels */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActivePanel('resource')}
              className={`flex-1 p-2 rounded ${activePanel === 'resource' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              Resource
            </button>
            <button
              onClick={() => setActivePanel('operator')}
              className={`flex-1 p-2 rounded ${activePanel === 'operator' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              Operator
            </button>
            <button
              onClick={() => setActivePanel('digital')}
              className={`flex-1 p-2 rounded ${activePanel === 'digital' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              Digital
            </button>
            <button
              onClick={() => setActivePanel('external')}
              className={`flex-1 p-2 rounded ${activePanel === 'external' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              External
            </button>
            <button
              onClick={() => setActivePanel('expert')}
              className={`flex-1 p-2 rounded ${activePanel === 'expert' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              Expert
            </button>
            <button
              onClick={() => setActivePanel('overview')}
              className={`flex-1 p-2 rounded ${activePanel === 'overview' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
            >
              Overview
            </button>
          </div>
          <div className="bg-white rounded shadow p-4 h-full overflow-y-auto">
            {activePanel === 'resource' && <ResourcePanel />}
            {activePanel === 'operator' && <OperatorPanel />}
            {activePanel === 'digital' && <DigitalPanel />}
            {activePanel === 'external' && <ExternalSupportPanel />}
            {activePanel === 'expert' && <ExpertPanel />}
            {activePanel === 'overview' && <OverviewPanel />}
          </div>
        </div>
      </div>
      {/* Simulation Section */}
      <div>
        <SimulationWrapper />
      </div>
    </div>
  );
};

export default ProductionCanvasDesign;