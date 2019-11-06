import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';


class NavBar extends React.Component {
    render(){
        return(
  
   <div>
  <Navbar className="navigate" >
    <Navbar.Brand  className="nav-style" href="#home">TechSmart Solutions</Navbar.Brand>
    <Nav className="nav-content">
      <Nav.Link  className="nv-bar" href="#home">Home</Nav.Link>
      <Nav.Link className="nv-bar" href="#About">About</Nav.Link>
      <Nav.Link className="nv-bar" href="#Service">Service</Nav.Link>
      <Nav.Link  className="nv-bar" href="#Contact">Contact</Nav.Link>
    </Nav>
    
  </Navbar>
  </div>        )
    }
}
  export default NavBar;