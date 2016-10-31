import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export const ColorPallet = ({ hex, name, ...props }) => (
  <div className="color-box" {...props}>
    <div className="color-pallet">
      <div className="color-space" style={{ backgroundColor: `${hex}` }} />
      <div className="color-hex">
        <span>
          {hex}
        </span>
      </div>
    </div>
    <div className="color-name">
      <span>
        {name}
      </span>
    </div>
  </div>
);
ColorPallet.propTypes = {
  hex: PropTypes.string,
  name: PropTypes.string,
};
const Colors = () => (
  <Grid fluid>
    <Row>
      <div className="page--content-block clearfix">
        <p>
          2. Colors
        </p>
        <div className="clearfix">
          <Col md={6}>
            <div className="color-group clearfix">
              <p>
                Background
              </p>
              <ColorPallet
                hex={'#383e49'}
                name="$dark-grey"
              />
              <ColorPallet
                hex={'#4c515d'}
                name="$grey"
              />
              <ColorPallet
                hex={'#f8f9fb'}
                name="$content-grey"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="color-group clearfix">
              <p>
                Buttons
              </p>
              <ColorPallet
                hex={'#0070d2'}
                name="$cyan"
              />
              <ColorPallet
                hex={'#f7b64b'}
                name="$orange"
              />
            </div>
          </Col>
        </div>
        <div className="clearfix">
          <Col md={12}>
            <div className="color-group clearfix">
              <p>
                Text
              </p>
              <ColorPallet
                hex={'#333333'}
                name="$textGray"
              />
              <ColorPallet
                hex={'#65696c'}
                name="$btn-text"
              />
              <ColorPallet
                hex={'#999999'}
                name="$minor-text"
              />
              <ColorPallet
                hex={'#0070d2'}
                name="Link color"
              />
            </div>
          </Col>
        </div>
      </div>
    </Row>
  </Grid>
);

export default Colors;

