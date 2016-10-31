import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-bootstrap';

const Content = props => (
  <Grid fluid>
    <Row>
      <div className="page--content">
        {props.children}
      </div>
    </Row>
  </Grid>
);
Content.propTypes = {
  children: PropTypes.node,
};
export default Content;
