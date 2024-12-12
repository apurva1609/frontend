import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark ">
      <Container>
        <Navbar.Brand className='text-white' >React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link to="/Ragister" className='text-decoration-none'><Nav.Link href="#register"className='text-white'>Ragister</Nav.Link></Link>
            <Link to="/View" className='text-decoration-none'><Nav.Link href="#view" className='text-white'>View</Nav.Link></Link> 
          </Nav>
          <Nav className="text-end">
            <Link to="/Sign" className='text-decoration-none'><Nav.Link  href='#signe in' className='text-light'>Sign In</Nav.Link></Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Home
