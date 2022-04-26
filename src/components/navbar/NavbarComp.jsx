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
              <Nav className="me-auto flex-column">
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
                <Nav.Link as={Link} to="/awards">
                  Honors and Awards
                </Nav.Link>
                <Nav.Link as={Link} to="/research">
                Research Activities
                </Nav.Link>
                <Nav.Link as={Link} to="/industry">
                Industry Interaction
                </Nav.Link>
                <Nav.Link as={Link} to="/otheractivities">
                  Other Activities
                </Nav.Link>
                <Nav.Link as={Link} to="/responsibilities">
                  Responsibilities
                </Nav.Link>
                <Nav.Link as={Link} to="/contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </div>
  );
}
