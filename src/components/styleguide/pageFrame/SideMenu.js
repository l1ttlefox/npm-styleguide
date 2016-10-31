import React from 'react';
import { Link } from 'react-router';

const SideMenu = () => (
  <nav className="vertical-side-menu">
    <ul>
      <li>
        <Link to="/styleguide" className="active">
          <i className="fa fa-desktop" aria-hidden="true" />
          <span>StyleGuide</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-user" aria-hidden="true" />
          <span>Customers</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-paper-plane" aria-hidden="true" />
          <span>Engagement</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-envelope" aria-hidden="true" />
          <span>Helpdesk</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-heart" aria-hidden="true" />
          <span>NPS</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-briefcase" aria-hidden="true" />
          <span>Campaigns</span>
        </Link>
      </li>
      <li>
        <Link to="/register">
          <i className="fa fa-cog" aria-hidden="true" />
          <span>Settings</span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default SideMenu;

