import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, {useState} from 'react';
import Modal1 from './Modal1'
import './Modal.css'

const NavComponent = () => {

  const [openModal1, setOpenModal1] = useState(false)


  return (
    <div>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="#">Salvador Martínez</Navbar.Brand>
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
                  <button className='modalBtn1' onClick={() => setOpenModal1(true)} >BMI Calculator</button>
                  <Modal1 open={openModal1} onClose={()=> setOpenModal1(false)} />
                  <NavDropdown
                    title="Info"
                    id={'offcanvasNavbarDropdown'}
                  >
                    <NavDropdown.Item href="#services">
                      Services
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
                <div><br/></div>
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