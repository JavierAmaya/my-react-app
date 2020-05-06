import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import logo from "../img/ferreteria logo.jpg";


const Header2: React.FC = () => (
    /*<header>
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <img src="../img/ferreteria logo.jpg" alt=""/>
                        <a className="navbar-brand anchor_navbar">

                            Ferreteria La Union
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="other_websites/Inicio/index.html">Inventario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Cliente</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>  */
    <Navbar className="navbar" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
              <img alt="" src={logo} width="30" height="30" className="d-inline-block align-top"/>{' '}
            Ferreteria La Unión
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Inventario</Nav.Link>
            <Nav.Link href="#link">Cliente</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
   </Navbar>
);

export default Header2;