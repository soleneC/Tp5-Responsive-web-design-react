import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Container, Row, Col, ButtonDropdown,Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';

class Header extends Component {
  constructor(props) {
   super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
    
    toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }


  render() {
    return (
      <header>
      <Container fluid>
        <div class="wrapper">
        <Row>
          <div class="logo-search">
          <Col md="1">
            <img class="pull-left" src={logo} alt="logo" 
            />
            </Col>
          </div>
          <Col md="2"></Col>
          <Col md="3">
          <form method="POST" action="index.html">
            <input type="search" required class="search" />
            <input
              type="submit"
              name="submit"
              value="Rechercher"
              class="submit"
            />
          </form>
          </Col>
          <Col md="4"></Col>

          <Col md="2">
          <div class="user">
           <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle>
            <a href="#">Luke Chesser</a>
            </DropdownToggle>
            <DropdownMenu>
            <DropdownItem>Heavy rotation </DropdownItem>
            <DropdownItem>Recent activity </DropdownItem>
            <DropdownItem>Top charts </DropdownItem>
            <DropdownItem>New releases </DropdownItem>
            <DropdownItem>History</DropdownItem>

            </DropdownMenu>
            </Dropdown>

          </div>
          </Col>
          </Row>
        </div>
        </Container>
      </header>
    );
  }
}

export default Header;
