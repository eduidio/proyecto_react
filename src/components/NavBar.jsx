import { Link } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Navegador = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="El_Coso_de_Cosito">El Cosito del Coso</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Herramienta_Electricas">Herramienta Electricas</Nav.Link>
            <Nav.Link href="Herramientas_de_mano">Herramientas de mano</Nav.Link>
            <Nav.Link href= "Herramientas_de_jardineria">Herramientas de Jardineria </Nav.Link>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item href="instagram">Instagram</NavDropdown.Item>
              <NavDropdown.Item href="facebbok">Facebook</NavDropdown.Item>
              <NavDropdown.Item href="whatssap">WhatsApp</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
  }
