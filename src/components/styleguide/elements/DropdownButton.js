import React, { PropTypes } from 'react';
import { SplitButton } from 'react-bootstrap';


const DropdownButton = ({ id, children, title }) => (
  <SplitButton className="drop-down-button" title={title} id={id}>
    { children }
  </SplitButton>
);

DropdownButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};
export default DropdownButton;
