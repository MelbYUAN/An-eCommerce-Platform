import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {LinkContainer} from "react-router-bootstrap";

function Header() {
    return (
        <div>
            <header>
                <Navbar expand="lg" variant="dark" bg="dark">
                    <Container>
                        <LinkContainer to="/">
                        <Navbar.Brand>ProSHOP</Navbar.Brand></LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                            <LinkContainer to="/cart">
                                <Nav.Link><i className="bi-cart-check"> Cart</i></Nav.Link></LinkContainer>
                                <LinkContainer to="/login">
                                <Nav.Link><i className="bi-people"> Login</i></Nav.Link></LinkContainer>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}

export default Header;