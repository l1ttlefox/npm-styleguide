import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

import Select from 'react-select';

export default class MultipleSelect extends Component {
  shouldComponentUpdate(nextProps) {
    let shouldUpdate = !_.isEqual(nextProps.selected, this.props.selected);
    shouldUpdate = shouldUpdate || !_.isEqual(nextProps.options, this.props.options);
    return shouldUpdate;
  }

  render() {
    const { name, validateNewValue } = this.props;
    const { selected, multi, allowCreate, options, onChange } = this.props;

    const filterOptions = function filterOptions(allOptions, filter, values) {
      if (!_.isArray(values)) return allOptions;

      let filteredOptions = allOptions.filter(option => !values.includes(option));

      if (filter !== undefined && filter !== null && filter.length > 0) {
        filteredOptions = filteredOptions.filter(option => RegExp(filter, 'ig').test(option.label));
      }

      if (validateNewValue && !validateNewValue(filter)) {
        return filteredOptions;
      }

      if (filter.length > 0 && allowCreate) {
        filteredOptions.push({
          label: filter,
          value: filter,
          create: true,
        });
      }

      return filteredOptions;
    };

    return (
      <Select
        name={name}
        value={selected}
        delimiter="||"
        multi={multi}
        allowCreate={allowCreate}
        options={options}
        onChange={onChange}
        filterOptions={filterOptions}
      />
    );
  }
}

MultipleSelect.propTypes = {
  selected: PropTypes.array,
  name: PropTypes.string.isRequired,
  multi: PropTypes.bool,
  allowCreate: PropTypes.bool,
  options: PropTypes.array,
  onChange: PropTypes.func,
  validateNewValue: PropTypes.func,
};

MultipleSelect.defaultProps = {
  selected: [],
  multi: true,
  allowCreate: false,
  options: [],
  onChange: function _noop() { return null; },
  validateNewValue: function _noop() { return true; },
};
