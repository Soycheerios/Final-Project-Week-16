import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" className="nav-link">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/restaurants" className="nav-link">
        Restaurants
      </Nav.Link>
      <Nav.Link as={Link} to="/restaurants/add" className="nav-link">
        Add Restaurant
      </Nav.Link>
    </Nav>
  );
};

export default Navigation;
