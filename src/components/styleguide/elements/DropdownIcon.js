import React, { PropTypes } from 'react';
import { DropdownButton } from 'react-bootstrap';

const DropdownIcon = ({ children, title, icon, pullRight, ...props }) => (
  <DropdownButton
    title={title}
    pullRight={pullRight}
    {...props}
    className={`${icon} drop-down-icon`}
  >
    { children }
  </DropdownButton>
);

export const DropdownUser = ({ children, title, icon, pullRight, alt, userImage, ...props }) => (
  <div className="drop-down-user clearfix">
    <div className="menu--user-icon">
      <img alt={alt} src={userImage} />
    </div>
    <DropdownButton
      title={title}
      pullRight={pullRight}
      {...props}
      className={`${icon} drop-down-icon`}
    >
      { children }
    </DropdownButton>
  </div>
);
DropdownUser.defaultProps = {
  pullRight: false,
  title: '',
  icon: '',
  id: '',
  alt: 'User',
  userImage: '../public/images/7424cd4d27bb1ccf5750ac112d706c80.jpg',
};
DropdownUser.propTypes = {
  pullRight: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  alt: PropTypes.string,
  userImage: PropTypes.string,
  children: PropTypes.node,
};
DropdownIcon.defaultProps = {
  pullRight: false,
  title: '',
  icon: '',
  id: '',
};
DropdownIcon.propTypes = {
  pullRight: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  icon: PropTypes.string,
};
export default DropdownIcon;
