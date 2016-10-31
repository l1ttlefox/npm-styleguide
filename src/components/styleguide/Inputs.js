import React, { PropTypes } from 'react';
import { Grid, Row, Col, FormControl, HelpBlock, FormGroup, ControlLabel } from 'react-bootstrap';

export const FieldGroup = ({ id, label, help, validationState, ...props }) => (
  <FormGroup controlId={id} validationState={validationState}>
    <ControlLabel>{label}</ControlLabel>
    <FormControl {...props} />
    {help && <HelpBlock>{help}</HelpBlock>}
  </FormGroup>
);
FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  help: PropTypes.string,
  validationState: PropTypes.string,
};
const Inputs = () => (
  <Grid fluid>
    <Row>
      <div className="page--content-block clearfix">
        <p>
          4. Inputs
        </p>
        <Col md={6}>
          <Row>
            <Col md={6}>
              <FieldGroup
                id="formControlsText"
                type="text"
                label="Placeholder"
                placeholder="Enter text"
              />
              <FieldGroup
                id="formControlsText"
                type="text"
                label="In focus state"
                placeholder="Enter text"
                className="input-focus-demo"
              />
            </Col>
            <Col md={6}>
              <FieldGroup
                id="formControlsEmail"
                type="email"
                label="Text value"
                defaultValue="email@mail.com"
              />
              <FieldGroup
                validationState="error"
                id="formValidationError1"
                type="text"
                label="Error"
                placeholder="Enter text"
                help="You can’t leave this field empty"
              />
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Textarea</ControlLabel>
            <FormControl componentClass="textarea" placeholder="textarea" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <FormControl componentClass="textarea" defaultValue="textarea" />
          </FormGroup>
        </Col>
      </div>
    </Row>
  </Grid>
);

export default Inputs;

