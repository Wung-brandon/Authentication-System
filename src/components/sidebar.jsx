import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-info text-white p-3" style={{ width: '250px' }}>
      <h4>Dashboard</h4>
      <Nav className="flex-column">
        <Nav.Link as={Link} to="/" className="text-white">Home</Nav.Link>
        <Nav.Link as={Link} to="/analytics" className="text-white">Analytics</Nav.Link>
        <Nav.Link as={Link} to="/orders" className="text-white">Orders</Nav.Link>
        <Nav.Link as={Link} to="/settings" className="text-white">Settings</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
