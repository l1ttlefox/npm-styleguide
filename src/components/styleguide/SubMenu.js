import React from 'react';
import { Grid, Row } from 'react-bootstrap';

const SubMenu = () => (
  <Grid fluid>
    <Row>
      <div className="page--sub-menu clearfix">
        <nav>
          <ul>
            <li className="active">Overview</li>
            <li>Submenu 2</li>
            <li>Submenu 3</li>
            <li>Submenu 4</li>
            <li>Submenu 5</li>
          </ul>
        </nav>
      </div>
    </Row>
  </Grid>
);

export default SubMenu;
