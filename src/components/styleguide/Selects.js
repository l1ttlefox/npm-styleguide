import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Select from 'react-select';
import {
  Grid,
  Row,
  Col,
  ControlLabel,
  MenuItem,
} from 'react-bootstrap';
import MultipleSelect from './elements/MultipleSelect';
import DropdownButton from './elements/DropdownButton';

class Selects extends Component {
  constructor() {
    super();
    this.state = {
      value: [],
      value_2: '',
    };
  }

  render() {
    return (
      <Grid fluid>
        <Row>
          <div className="page--content-block clearfix">
            <p>
              5. Selects
            </p>
            <Col md={4}>
              <div>
                <ControlLabel>
                  Multi Select
                </ControlLabel>
              </div>
              <div className="select-demo-block">
                <MultipleSelect
                  name="MultipleSelect"
                  selected={this.state.value}
                  options={
                    [
                      { value: '1', label: 'First' },
                      { value: '2', label: 'Second' },
                      { value: '3', label: 'Third' },
                    ]
                  }
                  onChange={value => this.setState({ value })}
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <ControlLabel>
                  Single Select
                </ControlLabel>
              </div>
              <div className="select-demo-block">
                <Select
                  name="Select"
                  clearable
                  value={this.state.value_2}
                  options={
                    [
                      { value: '1', label: 'First' },
                      { value: '2', label: 'Second' },
                      { value: '3', label: 'Third' },
                    ]
                  }
                  onChange={value => this.setState({ value_2: value })}
                />
              </div>
            </Col>
            <Col md={4}>
              <div>
                <ControlLabel>
                  Dropdown
                </ControlLabel>
              </div>
              <div className="select-demo-block">
                <DropdownButton title="+Add" id="Dropdown-demo">
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
                </DropdownButton>
              </div>
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}
export default Selects;
