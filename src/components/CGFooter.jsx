import React from 'react'
import {
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'
import colors from '../styles/colors'
import Icon from './Icon'

export default class CGFooter extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return (
      <div className="cgfooter">
        <Navbar
          light
          expand="md"
          style={{
            justifyContent: 'flex-start',
            height: '10vh',
            backgroundColor: colors.dark
          }}
        >
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Col>
                <Row>
                  <NavItem>
                    <Icon icon="location" style={{ color: colors.light }} />
                  </NavItem>
                </Row>
              </Col>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
