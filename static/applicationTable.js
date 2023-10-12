import React from 'react';
import { Button, Table } from 'react-bootstrap';

const ApplicationsTable = ({ applications, handleAddApplication, handleDeleteApplication, handleOpenApplicationSettings }) => {
  return (
    <div>
      <h2>Applications</h2>
      <Button onClick={handleAddApplication} variant="primary">Add Application</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Application ID</th>
            <th>APP EUI</th>
            <th>Description</th>
            <th>Devices</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application.id}>
              <td>{application.id}</td>
              <td>{application.appEUI}</td>
              <td>{application.description}</td>
              <td>{application.devices}</td>
              <td>
                <Button onClick={() => handleDeleteApplication(application.id)} variant="danger">Delete</Button>
                <Button onClick={() => handleOpenApplicationSettings(application.id)} variant="primary">Open Settings</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApplicationsTable;
