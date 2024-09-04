import {NavDropDown, Nav, Container, Navbar} from 'react-bootstrap';
import '../App.css';

const Header =()=> {
  return (
        <header>
          <nav className='d-flex justify-content-between'>
            <div>
              <h1>Cozy House</h1>
              <h6>Shelter for pets in Boston</h6>
            </div>
            <div className='d-flex gap-4'>
              <a href='#'>About the shelter</a>
              <a href='#'>Our pets</a>
              <a href='#'>Help the shelter</a>
              <a href='#'>Contacts</a>
            </div>
          </nav>
        </header>
  );
}
export default Header;