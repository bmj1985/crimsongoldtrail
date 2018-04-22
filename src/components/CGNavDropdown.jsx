import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class NavDropdown extends React.Component {

  render() {
    return (
        <DropdownMenu>
          <DropdownItem>Business Listings</DropdownItem>
          <DropdownItem>Adventures</DropdownItem>
          <DropdownItem>Self-Guided Tours</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Add Your Business</DropdownItem>
        </DropdownMenu>
    );
  }
}
