import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavArea.css';
import logo from '../../images/logo.png';

function NavArea() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand>
            <img src={logo} alt="logo" className='logo me-4' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white justify-content-center align-items-center ">
            <input type="text" className='searchInput' placeholder='Search Your Destination' />
            <Link to ='/' className='nav-link'>News</Link>
            <Link to ='/' className='nav-link'>Destination</Link>
            <Link to ='/' className='nav-link'>Blog</Link>
            <Link to ='/' className='nav-link'>Contact</Link>
            <Link to ='/login' className='nav-link'><button className='login-btn'>Login</button></Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavArea;