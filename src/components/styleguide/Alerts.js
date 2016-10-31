import React, { Component, PropTypes } from 'react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';


export class AlertDismissable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true,
    };
  }
  render() {
    const { bsStyle, children } = this.props;
    return (
      <div>
        {this.state.alertVisible &&
        <Alert bsStyle={bsStyle} onDismiss={() => this.setState({ alertVisible: false })}>
          { children }
        </Alert>
        }
      </div>
    );
  }
}
AlertDismissable.propTypes = {
  bsStyle: PropTypes.string,
  children: PropTypes.node,
};
const Alerts = () => (
  <Grid fluid>
    <Row>
      <div className="page--content-block">
        <p>
          7. Alerts
        </p>
        <Col sm={12} md={12}>
          <AlertDismissable bsStyle="danger">
            <p>
              <strong>Oh snap!</strong>
              <span>
                Change a few things up and
              </span>
              <strong> try submitting again.</strong>
            </p>
          </AlertDismissable>
          <AlertDismissable bsStyle="warning">
            <p>
              <strong>Warning!</strong>
              <span>
                Best check yo self, you are
              </span>
              <strong> not looking too good.</strong>
            </p>
          </AlertDismissable>
          <AlertDismissable bsStyle="success">
            <p>
              <strong>Well done! </strong>
              <span>
                You successfully read this
              </span>
              <strong> important alert message.</strong>
            </p>
          </AlertDismissable>
        </Col>
      </div>
    </Row>
  </Grid>
);

export default Alerts;
