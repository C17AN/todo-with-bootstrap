import React from "react";
import { Container, Navbar, NavbarBrand } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <div className="container-fluid">
        <Navbar.Brand href="#home">부트스트랩과 함께하는 투두!</Navbar.Brand>
      </div>
    </Navbar>
  );
};

export default Header;
