import React from "react";
import {
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import './NavBar.scss'

function NavBar() {
  return (
    <header>
      <Navbar className="mainNav" expand="lg">
        <Navbar.Brand href="/" className="mainlogo notoBold fs-24">Enimal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="save notoMid fs-20">save : 1000</Nav.Link>
            <Nav.Link href="/draw" className="drawBtn notoMid fs-20">Draw</Nav.Link>
            <NavDropdown title="Community" className="nav-dropdown1 notoMid fs-20">
              <NavDropdown.Item href="/notice" className="nav-dropdowm1_notice notoMid fs-16">공지사항</NavDropdown.Item>
              <NavDropdown.Item href="/community" className="nav-dropdowm1_free notoMid fs-16">자유게시판</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Account" className="nav-dropdown2 notoMid fs-20">
              <NavDropdown.Item href="/mypage" className="nav-dropdowm2_mypage notoMid fs-16">마이페이지</NavDropdown.Item>
              <NavDropdown.Item href="/community" className="nav-dropdowm2_acc notoMid fs-16">지갑연결</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavBar;
