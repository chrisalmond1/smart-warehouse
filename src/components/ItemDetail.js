import React from 'react';
import { useParams } from 'react-router-dom';

const mockInventoryData = [
  { id: 1, name: 'Item A', quantity: 100, totalSold: 50, restockLevel: 20 },
  { id: 2, name: 'Item B', quantity: 50, totalSold: 30, restockLevel: 10 },
  { id: 3, name: 'Item C', quantity: 200, totalSold: 150, restockLevel: 50 },
];

const ItemDetail = () => {
  const { itemId } = useParams();
  const item = mockInventoryData.find(item => item.id === parseInt(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h2 className="mt-4">Item Details - {item.name}</h2>
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
            <td>{item.id}</td>
          </tr>
          <tr>
            <td>Name</td>
            <td>{item.name}</td>
          </tr>
          <tr>
            <td>Quantity</td>
            <td>{item.quantity}</td>
          </tr>
          <tr>
            <td>Total Sold</td>
            <td>{item.totalSold}</td>
          </tr>
          <tr>
            <td>Restock Level</td>
            <td>{item.restockLevel}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ItemDetail;