import React from 'react';
import { useParams } from 'react-router-dom';

const mockEmployeeData = [
  { id: 1, name: 'John Doe', role: 'Manager', hoursWorked: 160, tasksCompleted: 25 },
  { id: 2, name: 'Jane Smith', role: 'Warehouse Worker', hoursWorked: 140, tasksCompleted: 20 },
  { id: 3, name: 'Sam Wilson', role: 'Forklift Operator', hoursWorked: 150, tasksCompleted: 22 },
];

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  const employee = mockEmployeeData.find(emp => emp.id === parseInt(employeeId));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  return (
    <div>
      <h2 className="mt-4">Employee Details - {employee.name}</h2>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Property</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID</td>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <td>Role</td>
            <td>{employee.role}</td>
          </tr>
          <tr>
            <td>Hours Worked</td>
            <td>{employee.hoursWorked}</td>
          </tr>
          <tr>
            <td>Tasks Completed</td>
            <td>{employee.tasksCompleted}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeDetail;