import React, { useState } from 'react';

type DepartmentHeaderProps = {
  initialDepartment: string;
};

const departments = ['Upstream', 'Core Production', 'Downstream'];

const DepartmentHeader: React.FC<DepartmentHeaderProps> = ({ initialDepartment }) => {
  const [department, setDepartment] = useState(initialDepartment);

  return (
    <div className="flex items-center justify-between bg-gray-200 p-2 border-b">
      <div className="font-semibold">{department}</div>
      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        className="p-1 border rounded text-sm"
      >
        {departments.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DepartmentHeader;