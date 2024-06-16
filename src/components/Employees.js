import React from 'react';
import { Link } from 'react-router-dom';

const mockEmployeeData = [
  { id: 1, name: 'John Doe', role: 'Manager', hoursWorked: 160, tasksCompleted: 25 },
  { id: 2, name: 'Jane Smith', role: 'Warehouse Worker', hoursWorked: 140, tasksCompleted: 20 },
  { id: 3, name: 'Sam Wilson', role: 'Forklift Operator', hoursWorked: 150, tasksCompleted: 22 },
];

const Employees = () => {
  const totalEmployees = mockEmployeeData.length;
  const totalHoursWorked = mockEmployeeData.reduce((acc, employee) => acc + employee.hoursWorked, 0);
  const totalTasksCompleted = mockEmployeeData.reduce((acc, employee) => acc + employee.tasksCompleted, 0);

  return (
    <div>
      <h2 className="mt-4">Employee Management</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Employees</h5>
              <p className="card-text">{totalEmployees}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Hours Worked</h5>
              <p className="card-text">{totalHoursWorked}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Tasks Completed</h5>
              <p className="card-text">{totalTasksCompleted}</p>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Hours Worked</th>
            <th>Tasks Completed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockEmployeeData.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.hoursWorked}</td>
              <td>{employee.tasksCompleted}</td>
              <td>
                <Link to={`/employees/${employee.id}`} className="btn btn-sm btn-primary">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;