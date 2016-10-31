import React from 'react';
import { Grid, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';

const Buttons = () => (
  <Grid fluid>
    <Row>
      <div className="page--content-block clearfix">
        <p>
          3. Buttons
        </p>
        <Col md={6}>
          <ButtonToolbar>
            <Button>Default</Button>
            <Button bsStyle="primary">Primary</Button>
            <Button className="blue-button">Blue</Button>
            <Button className="orange-button">Orange</Button>
          </ButtonToolbar>
          <ButtonToolbar>
            <Button className="round-button">Round</Button>
            <Button className="round-orange-button">Round</Button>
          </ButtonToolbar>
        </Col>
        <Col md={6}>
          <div className="btn-toolbar-sizes">
            <ButtonToolbar>
              <Button bsStyle="primary" bsSize="large">Large button</Button>
              <Button bsStyle="primary" bsSize="small">Medium button</Button>
              <Button bsStyle="primary" bsSize="xsmall">Small button</Button>
            </ButtonToolbar>
            <ButtonToolbar>
              <Button bsSize="large">Large button</Button>
              <Button bsSize="small">Medium button</Button>
              <Button bsSize="xsmall">Small button</Button>
            </ButtonToolbar>
          </div>
        </Col>
      </div>
    </Row>
  </Grid>
);

export default Buttons;
