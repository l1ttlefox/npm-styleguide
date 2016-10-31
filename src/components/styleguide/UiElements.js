import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col,
  ControlLabel,
  Button,
  Popover,
  OverlayTrigger,
  Tooltip,
  Pagination,
} from 'react-bootstrap';
import CheckBox from './elements/CheckBox';
import RadioButton from './elements/RadioButton';
import Trigger from './elements/Trigger';


class UiElements extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      isEnabled: false,
      selectedOption: null,
      activePage: 1,
    };
    this.onCheck = this.onCheck.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.pageSelect = this.pageSelect.bind(this);
  }
  onCheck() {
    this.setState({ checked: !this.state.checked });
  }
  handleOptionChange(changeEvent) {
    this.setState({ selectedOption: changeEvent.currentTarget.value });
  }
  pageSelect(eventKey) {
    this.setState({
      activePage: eventKey,
    });
  }
  render() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        <strong>Holy guacamole!</strong> Check this info.
        <p>
          This is Popover inner content. You can place any
          html here. For more description read react-bootstrap
          documentation
        </p>
      </Popover>
    );
    const tooltip = (
      <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
    );
    return (
      <Grid fluid>
        <Row>
          <div className="page--content-block clearfix">
            <p>
              6. Other UI elements
            </p>
            <div className="clearfix">
              <Col md={4}>
                <div>
                  <ControlLabel>
                    Checkboxes
                  </ControlLabel>
                </div>
                <div className="select-demo-block">
                  <div>
                    <CheckBox
                      className={''}
                      name="eventTypes"
                      title="Title"
                      label="CheckBox"
                      isChecked={this.state.checked}
                      onChange={this.onCheck}
                    />
                  </div>
                  <div>
                    <CheckBox
                      className={''}
                      name="eventTypes"
                      title="Title"
                      label="CheckBox"
                      isChecked={!this.state.checked}
                      onclick={this.onCheck}
                    />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <ControlLabel>
                    Triggers
                  </ControlLabel>
                </div>
                <div className="select-demo-block">
                  <div>
                    <Trigger
                      isEnabled={this.state.isEnabled}
                      animationClass={'animated'}
                      onChange={value => this.setState({ ...value })}
                    />
                  </div>
                  <div>
                    <Trigger
                      isEnabled={!this.state.isEnabled}
                      animationClass={'animated'}
                      onChange={value => this.setState({ ...value })}
                    />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <ControlLabel>
                    Popover
                  </ControlLabel>
                </div>
                <div className="select-demo-block">
                  <div className="popover-insert">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popoverHoverFocus}>
                      <div className="popover-popup-element">
                        <i className="fa fa-question-circle" aria-hidden="true" />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </Col>
            </div>
            <div className="clearfix">
              <Col md={4}>
                <div>
                  <ControlLabel>
                    Radiobutton
                  </ControlLabel>
                </div>
                <div className="select-demo-block">
                  <div>
                    <RadioButton
                      value="cherry"
                      checked={(this.state.selectedOption === 'cherry')}
                      onChange={this.handleOptionChange}
                      title="Cherry"
                    />
                  </div>
                  <div>
                    <RadioButton
                      value="apple"
                      checked={(this.state.selectedOption === 'apple')}
                      onChange={this.handleOptionChange}
                      title="Apple"
                    />
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div>
                  <ControlLabel>
                    Tooltip
                  </ControlLabel>
                </div>
                <div className="select-demo-block">
                  <div className="popover-insert">
                    <OverlayTrigger placement="top" overlay={tooltip}>
                      <Button>
                        Hover to see the tooltip
                      </Button>
                    </OverlayTrigger>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="select-demo-block">
                  <div className="popover-insert">
                    <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
                      <div className="popover-popup-element">
                        <i className="fa fa-question-circle" aria-hidden="true" />
                      </div>
                    </OverlayTrigger>
                  </div>
                </div>
              </Col>
            </div>
            <Col md={12}>
              <div>
                <ControlLabel>
                  Pagination
                </ControlLabel>
              </div>
              <div>
                <Pagination
                  first
                  last
                  ellipsis
                  boundaryLinks
                  items={5}
                  maxButtons={5}
                  activePage={this.state.activePage}
                  onSelect={this.pageSelect}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Grid>
    );
  }
}

export default UiElements;
