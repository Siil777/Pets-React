import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Hamburger from 'hamburger-react';
import '../App.css';
import '../css/Header.css';

const Header = () => {
  console.log(useState);
  const [isOpen, setOpen] = useState(false);

  return (
    <Navbar expand='lg' className='d-flex justify-content-between'>
        <Navbar.Brand href='#'>
          Cozy House
          <h6>Shelter for pets in Boston</h6>
        </Navbar.Brand>
        <div className='d-lg-none custom-ham'>
        <Hamburger color='var(--color-primary)' toggled={isOpen} toggle={setOpen} />
        </div>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          aria-expanded={isOpen}
          onClick={() => setOpen(prev => !prev)}
        />
        <Navbar.Collapse
          id='basic-navbar-nav'
          className={isOpen ? 'show' : ''} style={{flexGrow: '0'}}
        >
          <Nav>
            <Nav.Link href='#'>About the shelter</Nav.Link>
            <Nav.Link href='#'>Our pets</Nav.Link>
            <Nav.Link href='#'>Help the shelter</Nav.Link>
            <Nav.Link href='#'>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
