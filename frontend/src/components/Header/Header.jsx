import React, { Component } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Navbar, Image } from 'react-bootstrap';
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" fixed="top">
                <LinkContainer to="/">
                    <Navbar.Brand className="nav-cal" >
                        <Image width="60px"src="/newLOGO.png" />
                    </Navbar.Brand>
                </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link className="nav-cal">SENSOR READINGS</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/selectSeed">
                            <Nav.Link className="nav-cal">SELECT SEED</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/disease">
                            <Nav.Link className="nav-cal">DISEASE</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/growth">
                            <Nav.Link className="nav-cal">GROWTH</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/fertilizer">
                            <Nav.Link className="nav-cal">FERTILIZER</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <Nav.Link className="login nav-cal">SIGN OUT</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )

    }
}

export default Header
