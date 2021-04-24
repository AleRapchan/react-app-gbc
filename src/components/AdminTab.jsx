import React from 'react';
//import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter, Route, Switch, Link}  from 'react-router-dom';

const AdminTab = () => {
  return(
    <div name="Admin Tab" width="70%">
      <Nav className="justify-content-end"
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link><Link to={'/login'}>Admin Login</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link><Link to={'/'}>Logout</Link></Nav.Link>
          {/* <Nav.Link eventKey="disabled" disabled> */}
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default AdminTab;