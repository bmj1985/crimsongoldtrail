import React from 'react'
import {
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from 'reactstrap'
import colors from '../styles/colors'
import Icon from './Icon'
import '../styles/components/GGFooter.css'
import { Link } from 'react-router-dom'
import poweredByDU from "../assets/DenverPoweredByDUWhiteText.png";

export default class CGFooter extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render () {
    return <div>
        <Navbar className="cgfooter" light expand="md" style={{ backgroundColor: colors.dark }}>
          <NavItem className="footerColOne" onClick={this.props.toggleNearMe}>
            <Icon icon="location" style={{ color: colors.light }} />
            <p id="du-near-me">DU Near Me</p>
          </NavItem>
          <Link className="footerColTwo" to="/home">
            <div id="poweredByDUwrapper">
              <img id="poweredbydu" src={poweredByDU} alt="DENVER powered by DU" />
            </div>
          </Link>
        </Navbar>
      </div>;
  }
}
