import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark" fixed="top">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#career">Career</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#certification">Certification</Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar> 
  );
  
}