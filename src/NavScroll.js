import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScroll() {
  return (
    <header className="header fixed-top header-animated">
    <Navbar className=" py-3" expand="lg">
      <Container fluid className="container">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <div  id="NavbarSupportedContent">
            <ul className="navbar-nav">
              <li className="navbar-brand">
                |  rom.valme@gmail.com | &nbsp;
                <a  href="https://github.com/cdr0mii"><i className="fa fa-github-square"></i></a> &nbsp; | &nbsp;
                <a  href="https://www.instagram.com/r_m_ld/"><i className="fa fa-instagram"></i></a> &nbsp; |
              </li>
              </ul>
        </div>
          <Nav className="ml-auto" navbarScroll>
            <Nav.Link className="nav-item" href="index.html">About</Nav.Link>
            <Nav.Link className="nav-item" href="projects.html">Projects</Nav.Link>
            <Nav.Link  className="nav-item" href="blogs.html">Blogs</Nav.Link>
            <Nav.Link  className="nav-item mr-2" href="Dream.html">Dream</Nav.Link>
          </Nav>
          
            <Button className="btn btn-primary mr-2" type="button" data-target="#quoteForm" data-toggle="modal" onClick={() =>{window.open('Rom Valme Resume.pdf')} }>Resume</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default NavScroll;