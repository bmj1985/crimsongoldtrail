import React from 'react'
import { DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'

export default class CGNavDropdown extends React.Component {
  render () {
    return (
      <DropdownMenu>
        <Link to='/businesslistings'><DropdownItem>Business Listings</DropdownItem></Link>
        <DropdownItem>Adventures</DropdownItem>
        <Link to={{ pathname: '/tours' }}><DropdownItem>Self-Guided Tours</DropdownItem></Link>
        <DropdownItem divider />
        <Link to={{ pathname: '/addnewbusiness' }}><DropdownItem>Add Your Business</DropdownItem></Link>
      </DropdownMenu>)
  }
}
