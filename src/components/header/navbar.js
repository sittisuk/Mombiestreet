import React from 'react';
import './../main.css';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class Navbars extends React.Component {
    render() {
        return (
            <Navbar className="Navbar">
                <Navbar.Header className="marginTop30">
                    <Navbar.Brand>
                        <a href="#reactbootstrap">SomeThing - New</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>

                <Navbar.Collapse className="marginTop30">
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#" className="menu-font">ABOUT</NavItem>
                        <NavItem eventKey={2} href="#" className="menu-font">OUR SERVICEST</NavItem>
                        <NavItem eventKey={2} href="#" className="menu-font">OUR TEAM</NavItem>
                        <NavItem eventKey={2} href="#" className="menu-font">CONTACT US</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navbars;