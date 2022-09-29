import React, { useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./NavBar.scss";


import nav from '@images/NAV.png'
import Login from "./Login/Login";
import Charge from "./Charge";

const Web3 = require('web3');

function NavBar() {

  const [SSF, setSSF] = useState(null)
  const web3 = new Web3(new Web3.providers.HttpProvider("http://20.196.209.2:8545/"));
  const token = '0x0c54E456CE9E4501D2c43C38796ce3F06846C966';
  const wallet = localStorage.myAddress;
  const minABI = [
    {
      constant: true,
      inputs: [{ name: "_owner", type: "address" }],
      name: "balanceOf",
      outputs: [{ name: "balance", type: "uint256" }],
      type: "function",
    },
  ];
  const contract = new web3.eth.Contract(minABI, token);
  const getBalance = async () => {
    const res = await contract.methods.balanceOf(wallet).call();
    // const format = web3.utils.fromWei(res);
    const ssf = res.toLocaleString("ko-KR");
    setSSF(ssf)
  }
  getBalance();

  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false)
  const [modalCharge, setModalCharge] = useState(false)

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const chargeModal = () => {
    setModalCharge(!modalCharge)
  }

  function Logout(e) {
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
              <>
                <Nav.Link className="save notoMid fs-20" onClick={chargeModal}>ssf : {SSF}코인</Nav.Link>
                <Nav.Link className="save notoMid fs-20">save : 0</Nav.Link>
              </>
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
                    onClick={e => Logout(e)}
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
      <Charge open={modalCharge} close={chargeModal} />
    </header>
  );
}

export default NavBar;
