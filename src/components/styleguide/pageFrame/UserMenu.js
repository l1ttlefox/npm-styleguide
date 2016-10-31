import React from 'react';
import { MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DropdownIcon, { DropdownUser } from '../elements/DropdownIcon';

const UserMenu = () => (
  <nav className="menu--user">
    <DropdownIcon pullRight icon="fa fa-envelope">
      <LinkContainer to="/login" >
        <MenuItem eventKey={3.1}>
          Action
        </MenuItem>
      </LinkContainer>
      <LinkContainer to="/todo" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <LinkContainer to="/styleguide" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <MenuItem divider />
      <LinkContainer to="/register" >
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </LinkContainer>
    </DropdownIcon>
    <DropdownIcon pullRight icon="fa fa-bell">
      <LinkContainer to="/login" >
        <MenuItem eventKey={3.1}>
          Action
        </MenuItem>
      </LinkContainer>
      <LinkContainer to="/todo" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <LinkContainer to="/styleguide" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <MenuItem divider />
      <LinkContainer to="/register" >
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </LinkContainer>
    </DropdownIcon>
    <DropdownUser pullRight >
      <LinkContainer to="/login" >
        <MenuItem eventKey={3.1}>
          Action
        </MenuItem>
      </LinkContainer>
      <LinkContainer to="/todo" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <LinkContainer to="/styleguide" >
        <MenuItem eventKey={3.2}>Another action</MenuItem>
      </LinkContainer>
      <MenuItem divider />
      <LinkContainer to="/register" >
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </LinkContainer>
    </DropdownUser>
  </nav>
);

export default UserMenu;
