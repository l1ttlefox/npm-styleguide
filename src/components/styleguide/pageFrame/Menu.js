import React, { PropTypes } from 'react';
import { Navbar } from 'react-bootstrap';
import SideMenu from './SideMenu';
import UserMenu from './UserMenu';

const NavBar = (props) => {
  const { minifyMenu, miniMenu } = props;
  return (
    <Navbar fluid fixedTop >
      <Navbar.Header className="">
        <Navbar.Brand>
          <a href="/">
            <img src="../public/images/logo_dark.svg" alt="Successo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <div className="menu-minified-button">
          <button
            onClick={() => (minifyMenu(!miniMenu))}
          />
        </div>
        <UserMenu />
        <SideMenu />
      </Navbar.Collapse>
    </Navbar>
  );
};
NavBar.propTypes = {
  miniMenu: PropTypes.bool,
  minifyMenu: PropTypes.func,
};
export default NavBar;
