import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar'; // Import your NavBar component
import ApplicationsTable from './applicationsTable'; // Import your ApplicationsTable component
import GatewaysTable from './gatewaysTable'; // Import your GatewaysTable component
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  // Define state to control the current view (home, applications, or gateways)
  const [currentView, setCurrentView] = useState('home');

  // Dummy data for the tables (you can replace with your data)
  const applicationsData = [
    { appID: 1, appEUI: '1234567890', Description: 'App 1', devices: 10 },
    { appID: 2, appEUI: '9876543210', Description: 'App 2', devices: 5 },
    // Add more application data here
  ];

  const gatewaysData = [
    { gatewayID: 1, gwEUI: 'ABCDEF123456', Description: 'Gateway 1', lastSeen: '2023-10-01' },
    { gatewayID: 2, gwEUI: 'XYZ789012345', Description: 'Gateway 2', lastSeen: '2023-09-15' },
    // Add more gateway data here
  ];

  // Function to render the appropriate view based on the current view state
  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <div>
            <ApplicationsTable applications={applicationsData} />
            <GatewaysTable gateways={gatewaysData} />
          </div>
        );
      case 'applications':
        return <ApplicationsTable applications={applicationsData} />;
      case 'gateways':
        return <GatewaysTable gateways={gatewaysData} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar currentView={currentView} setCurrentView={setCurrentView} />
      {renderView()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
