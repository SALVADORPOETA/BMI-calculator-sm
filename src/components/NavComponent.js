import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavComponent = () => {
  return (
    <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="/">Salvador Martínez</Navbar.Brand>
            <Navbar.Toggle aria-controls={'offcanvasNavbar'} />
            <Navbar.Offcanvas
              id={'offcanvasNavbar'}
              aria-labelledby={'offcanvasNavbarLabel'}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={'offcanvasNavbarLabel'}>
                  Salvador Martínez
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <NavDropdown
                    title="Info"
                    id={'offcanvasNavbarDropdown'}
                  >
                    <NavDropdown.Item href="#about">
                      About
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#prices">
                      Prices
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#contact">
                      Contact
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  );
}
    

export default NavComponent