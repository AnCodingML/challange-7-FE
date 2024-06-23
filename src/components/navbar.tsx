import {Container,Nav,Navbar ,Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
   return (
      <Navbar collapseOnSelect expand="lg" className="py-lg-4">
      <Container>
        <Link to="/"><div className='logo'></div></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className='my-4 my-lg-0'>
          <Col className="d-lg-flex gap-4 d-grid">
            <Nav className='ms-auto me-lg-0 me-auto gap-4 text-center'>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu">Our Services</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu">Why Us</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu">Testimonial</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu">FAQ</Nav></Link>
            </Nav>
            <Link to="cms" className='text-decoration-none text-center'><Button className='navbar__button rounded-1 px-3 ms-lg-2 fw-bold' variant="success">Register</Button></Link>
          </Col>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   )
}

export default Navigation