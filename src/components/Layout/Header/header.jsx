import React from "react";
// import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './navbarElements'
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <header>
            <Navbar className="personalizado" variant="dark" expand="lg">
                <Container fluid>
                        <Link to="/" style={{textDecoration: "none"}} className="styleNav col-lg-2 margen">
                            <div className="logo"></div>
                        </Link>
                    <Navbar.Collapse id="navbarScroll" className=''>

                        {/*SOLUCIONAR LA BARRA DE BUSQUEDA Y EL CARRITO PARA QUE SE VEA DENTRO DEL COLLAPSE PERO PEGADO A LA ESQUINA} */}

                        <div className="col-lg-9">
                            <Nav className="me-auto my-2 my-lg-0 centrado" style={{ maxHeight: "200px"}} navbarScroll>
                                <Link  to="/" style={{textDecoration: "none"}} className="styleNav">Inicio</Link>
                                <Link  to="/" style={{textDecoration: "none"}} className="styleNav">Catalogo</Link>
                                <Link  to="/" style={{textDecoration: "none"}} className="styleNav">Cuenta</Link>
                            </Nav>
                        </div>


                        
                        </Navbar.Collapse>
                        <div className="mg">
                            <Link to="/" className="cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>

                            <Link to="/" className="user">
                                <FontAwesomeIcon icon={faUser} />
                            </Link>
                        </div>



                    <Navbar.Toggle aria-controls="navbarScroll" />
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
