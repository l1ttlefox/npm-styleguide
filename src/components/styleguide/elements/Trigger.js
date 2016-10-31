import React, { PropTypes } from 'react';

const Trigger = (props) => {
  const { onChange, animationClass, isEnabled } = props;
  const toggleClass = isEnabled ? 'on' : 'off';
  return (
    <button
      className={`toggle ${toggleClass} ${animationClass}`}
      onClick={() => onChange({ isEnabled: !isEnabled })}
    />
  );
};

Trigger.propTypes = {
  animationClass: PropTypes.string,
  isEnabled: PropTypes.bool,
  onChange: PropTypes.func,
};
Trigger.defaultProps = {
  animationClass: '',
  isEnabled: false,
};
export default Trigger;
