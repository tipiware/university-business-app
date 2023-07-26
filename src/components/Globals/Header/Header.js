import React, { useContext } from "react"
import * as ReactBootStrap from "react-bootstrap"
import { navigate } from "gatsby"

const Header = () => {
  return (
    <ReactBootStrap.Navbar bg="light" expand="lg">
      <ReactBootStrap.Navbar.Brand href="/">
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Brand href="/">
        Education
      </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="/">Home</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/main">Admission</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/programme">Our Program</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="/about">About Us</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>

      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
  )
}

export default Header
