import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

export default class CheckBox extends Component {
  shouldComponentUpdate(nextProps) {
    let shouldUpdate = !_.isEqual(nextProps.isChecked, this.props.isChecked);
    shouldUpdate = shouldUpdate || !_.isEqual(nextProps.label, this.props.label);
    return shouldUpdate;
  }

  render() {
    const { key, title, name } = this.props;
    const { isChecked, label, onChange } = this.props;

    const id = `${title}-checkbox-${key}`;

    return (
      <label
        htmlFor={id}
        className={`${this.props.className}-wrapper clearfix`}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          style={{ display: 'none' }}
          onChange={onChange}
          checked={isChecked}
          className={this.props.className}
        />
        <span className="checkbox">
          <i className="fa fa-check" />
        </span>
        <span className="label-text">
          {label}
        </span>
      </label>
    );
  }
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  label: PropTypes.any,
  key: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

CheckBox.defaultProps = {
  className: 'ry-checkbox',
  title: '',
  label: '',
  key: Date.now(),
  isChecked: false,
  onChange: function _noop() { return null; },
};
