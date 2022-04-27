import "./navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import React from "react";
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function NavbarComp() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
          <Container >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto flex-column links">
                <Nav.Link as={Link} to="/" className="navLink">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile" className="navLink">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/awards" className="navLink">
                  Honors and Awards
                </Nav.Link>
                <Nav.Link as={Link} to="/research" className="navLink">
                Research Activities
                </Nav.Link>
                <Nav.Link as={Link} to="/industry" className="navLink">
                Industry Interaction
                </Nav.Link>
                <Nav.Link as={Link} to="/otheractivities" className="navLink">
                  Other Activities
                </Nav.Link>
                <Nav.Link as={Link} to="/responsibilities" className="navLink">
                  Responsibilities
                </Nav.Link>
                <Nav.Link as={Link} to="/contact" className="navLink">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}
