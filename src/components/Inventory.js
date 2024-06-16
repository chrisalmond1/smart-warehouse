import React from 'react';
import { Link } from 'react-router-dom';

const mockInventoryData = [
  { id: 1, name: 'Item A', quantity: 100, totalSold: 50, restockLevel: 20 },
  { id: 2, name: 'Item B', quantity: 50, totalSold: 30, restockLevel: 10 },
  { id: 3, name: 'Item C', quantity: 200, totalSold: 150, restockLevel: 50 },
];

const Inventory = () => {
  const totalItems = mockInventoryData.length;
  const totalQuantity = mockInventoryData.reduce((acc, item) => acc + item.quantity, 0);
  const totalSold = mockInventoryData.reduce((acc, item) => acc + item.totalSold, 0);

  return (
    <div>
      <h2 className="mt-4">Inventory Management</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Items</h5>
              <p className="card-text">{totalItems}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Quantity</h5>
              <p className="card-text">{totalQuantity}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-info mb-3">
            <div className="card-body">
              <h5 className="card-title">Total Sold</h5>
              <p className="card-text">{totalSold}</p>
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Total Sold</th>
            <th>Restock Level</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockInventoryData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.totalSold}</td>
              <td>{item.restockLevel}</td>
              <td>
                <Link to={`/inventory/${item.id}`} className="btn btn-sm btn-primary">View Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;