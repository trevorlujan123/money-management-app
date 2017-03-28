import React from 'react';
import {
  Navbar,
  Button
} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Hourly Wage App</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Text>
          Hello!
        </Navbar.Text>
        <Button>
          Sign Out
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
