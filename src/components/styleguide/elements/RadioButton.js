import React, { PropTypes } from 'react';

const RadioButton = (props) => {
  const { title, onChange, value, checked, key } = props;
  const id = `${title}-checkbox-${key}`;
  return (
    <label htmlFor={id}>
      <input
        id={id}
        type="radio"
        onChange={onChange}
        checked={checked}
        value={value}
        style={{ display: 'none' }}
      />
      <span className="radioButton" />
      <span className="label-text">
        {title}
      </span>
    </label>
  );
};
RadioButton.propTypes = {
  key: PropTypes.any,
  checked: PropTypes.bool,
  value: PropTypes.string.isRequired,
  title: PropTypes.string,
  onChange: PropTypes.func,
};

RadioButton.defaultProps = {
  key: Date.now(),
  title: '',
  value: '',
  checked: false,
  onChange: function _noop() { return null; },
};
export default RadioButton;
