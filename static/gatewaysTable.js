import React from 'react';
import { Button, Table } from 'react-bootstrap';

const GatewaysTable = ({ gateways, handleAddGateway, handleDeleteGateway, handleOpenGatewaySettings }) => {
  return (
    <div>
      <h2>Gateways</h2>
      <Button onClick={handleAddGateway} variant="primary">Add Gateway</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Gateway ID</th>
            <th>Gateway EUI</th>
            <th>Description</th>
            <th>Last Seen</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {gateways.map(gateway => (
            <tr key={gateway.id}>
              <td>{gateway.id}</td>
              <td>{gateway.gatewayEUI}</td>
              <td>{gateway.description}</td>
              <td>{gateway.lastSeen}</td>
              <td>
                <Button onClick={() => handleDeleteGateway(gateway.id)} variant="danger">Delete</Button>
                <Button onClick={() => handleOpenGatewaySettings(gateway.id)} variant="primary">Open Settings</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default GatewaysTable;
