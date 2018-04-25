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
import '../styles/components/CGHeader.css'
import CGNavDropdown from './CGNavDropdown'
import logo from '../assets/DUShield.png'
import { Link } from 'react-router-dom'

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
      <Navbar expand="lg" style={{ backgroundColor: colors.dark }}>
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret style={{ color: colors.light}}>
              Menu
          </DropdownToggle>
          <CGNavDropdown />
        </Dropdown>
        <Link to="/">
          <NavbarBrand style={{ color: colors.light }}>
            <div id="logowrapper">
              <img id="dulogo" src={logo} />
              <NavLink to="/" id='title'>Crimson & Gold Trail</NavLink>
            </div>
          </NavbarBrand>
        </Link>
      </Navbar>
    </header>
  }
}
