"use client";

import React, { useEffect, useState } from 'react';

const SimulationWrapper: React.FC = () => {
  const [simulationResult, setSimulationResult] = useState<string>('No simulation run yet');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSimulationResult('Simulation completed: System performance is optimal.');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="bg-gray-50 p-4 rounded shadow">
      <h3 className="text-lg font-bold mb-2">Simulation Results</h3>
      <p>{simulationResult}</p>
    </div>
  );
};

export default SimulationWrapper;