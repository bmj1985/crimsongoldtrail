import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Media
} from 'reactstrap'
import colors from '../styles/colors'
import CGNavDropdown from './CGNavDropdown'
import logo from '../assets/DUShield.png'

export default class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      dropdownOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen,
      dropdownOpen: !this.state.dropdownOpen
    })
  }
  render () {
    return <header className="cgheader">
      <Navbar expand="lg" style={{ justifyContent: 'flex-start', height: '10vh', backgroundColor: colors.dark }}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret style={{ color: colors.light}}>
              Menu
          </DropdownToggle>
          <CGNavDropdown />
        </Dropdown>
        <NavbarBrand style={{ color: colors.light, fontFamily: 'Futura PT', fontSize: '1.6rem', margin: '1vw', alignItems: 'center', display: 'flex' }}>
          <img src={logo} style={{ height: '5vh', margin: '1vw' }} />
          <h1>
            Crimson & Gold Trail
          </h1>
        </NavbarBrand>
      </Navbar>
    </header>
  }
}
