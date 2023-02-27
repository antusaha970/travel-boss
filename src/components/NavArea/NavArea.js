import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavArea.css';
import logo from '../../images/logo.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { getAuth, signOut } from "firebase/auth";

function NavArea() {

  const [user, setUser, isLoggedIn, setIsLoggedIn] = useContext(UserContext);
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Successfully logged out");
      setIsLoggedIn(false);
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      alert(error.message);
    });

  }

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
            <Link to='/' className='nav-link'>News</Link>
            <Link to='/' className='nav-link'>Destination</Link>
            <Link to='/' className='nav-link'>Blog</Link>
            <Link to='/' className='nav-link'>Contact</Link>
            {
              isLoggedIn ? <button className='login-btn' onClick={handleLogout}>Logout</button> : <Link to='/login' className='nav-link'><button className='login-btn'>Login</button></Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavArea;