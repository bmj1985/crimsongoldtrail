import React from 'react'
import { DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class NavDropdown extends React.Component {
  render () {
    return (
      <DropdownMenu>
        <DropdownItem><Link to="/businesslistings">Business Listings</Link></DropdownItem>
        <DropdownItem>Adventures</DropdownItem>
        <DropdownItem>Self-Guided Tours</DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to={'addnewbusiness'}>Add Your Business</Link></DropdownItem>
      </DropdownMenu>
    )
  }
}
