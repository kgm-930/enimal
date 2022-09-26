import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";


import nav from '@images/NAV.png'
import Login from "./Login/Login";


function NavBar() {

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  function Logout(e){
    e.preventDefault();
    localStorage.removeItem('token')
    navigate('/')
  }
 
  return (
    <header className="fixed-top">
      <Navbar className="mainNav" expand="lg">
        <Navbar.Brand href="/" className="mainlogo notoBold fs-24">
          <img className="logoimg" src={nav} alt="#" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {localStorage.token ? 
            <Nav.Link className="save notoMid fs-20">save : 1000</Nav.Link>
            :
            null
            }
            <Nav.Link href="/draw" className="drawBtn notoMid fs-20">
              Draw
            </Nav.Link>
            <NavDropdown
              title="Community"
              className="nav-dropdown1 notoMid fs-20"
            >
              <NavDropdown.Item
                href="/notice"
                className="nav-dropdowm1_notice notoMid fs-16"
              >
                공지사항
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/community"
                className="nav-dropdowm1_free notoMid fs-16"
              >
                자유게시판
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Account"
              className="nav-dropdown2 notoMid fs-20"
            >
              {localStorage.token ?

                <>
                  <NavDropdown.Item
                    href="/mypage"
                    className="nav-dropdowm2_mypage notoMid fs-16"
                  >
                    마이페이지
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={e=>Logout(e)}
                    className="nav-dropdowm2_acc notoMid fs-16"
                  >
                    로그아웃
                  </NavDropdown.Item>
                </>
                :
                <NavDropdown.Item
                  onClick={openModal}
                  className="nav-dropdowm2_acc notoMid fs-16"
                >
                  지갑연결
                </NavDropdown.Item>
              }


            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Login open={modalOpen} close={closeModal} />
    </header>
  );
}

export default NavBar;
