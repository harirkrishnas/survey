import React from 'react';

const GlobalControls: React.FC = () => {
  // Placeholder functions for global actions
  const handleUndo = () => console.log('Undo action');
  const handleRedo = () => console.log('Redo action');
  const handleSave = () => console.log('Save action');
  const handleRun = () => console.log('Run Simulation');
  const handleReset = () => console.log('Reset workspace');

  return (
    <div className="flex space-x-2 bg-gray-100 p-2 rounded shadow">
      <button onClick={handleUndo} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Undo</button>
      <button onClick={handleRedo} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Redo</button>
      <button onClick={handleSave} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Save</button>
      <button onClick={handleRun} className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600">Run Simulation</button>
      <button onClick={handleReset} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reset</button>
    </div>
  );
};

export default GlobalControls;