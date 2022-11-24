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
        <div>
            <ul className="navbar-nav">
              <li className="navbar-brand">
              |  rom.valme@gmail.com | &nbsp;
                <a  href="https://github.com/cdr0mii"><i class="fa fa-github-square"></i></a> &nbsp; | &nbsp;
                <a  href="https://www.instagram.com/r_m_ld/"><i class="fa fa-instagram"></i></a> &nbsp; |
              </li>
              </ul>
        </div>
          <Nav className="ml-auto" navbarScroll>
            <Nav.Link className="nav-link" href="index.html">About</Nav.Link>
            <Nav.Link className="nav-link " href="projects.html">Projects</Nav.Link>
            <Nav.Link  className="nav-link" href="blogs.html">Blogs</Nav.Link>
            <Nav.Link  className="nav-link" href="Dream.html">Dream</Nav.Link>
          </Nav>
          
            <Button className="btn btn-primary" type="button" data-target="#quoteForm" data-toggle="modal" onClick={() =>{window.open('Rom Valme Resume.pdf')} }>Resume</Button>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}

export default NavScroll;