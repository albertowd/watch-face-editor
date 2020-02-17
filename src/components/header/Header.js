import React from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'

import './Header.css';

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" className="navbar-dark" expand="lg">
                <Navbar.Brand href="#home">Watch Face Editor</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <NavDropdown id="basic-nav-dropdown" title="Device" >
                            <NavDropdown.Item href="#gts">Amazfit GTS</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item disabled={true} href="#mb4">Mi Band 4</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
