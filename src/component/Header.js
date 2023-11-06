import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
  return (
    <>
     <Wrapper>
          <Navbar expand="lg" className="bg-body-tertiary navi" style={{position: 'relative',zIndex : '5'}}>
            <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Link to="/" className='navItem'>HOME</Link>
                    <Link to="/about" className='navItem'>ABOUT</Link>
                    <Link to="/contact" className='navItem'>CONTACT US</Link>       
                </Nav>
                </Navbar.Collapse>
            </Container>
          </Navbar>
    </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
.navbar,
.navbar-default{
    background: #ffffff3d!important;
}
.navi a{
    color: #fff;
    text-decoration: none;
}
    .navItem{
        margin: 20px 40px;
    }
`;

export default Header