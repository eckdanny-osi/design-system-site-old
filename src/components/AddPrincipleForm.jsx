import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  isValid: PropTypes.bool,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  isValid: true,
  value: '',
};

const AddPrincipleForm = ({ isValid, onChange, onSubmit, value }) => {
  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit && onSubmit();
  };
  return (
    <form noValidate onSubmit={handleOnSubmit}>
      <label htmlFor="new-principle">New Principle: </label>
      <input
        id="new-principle"
        autoComplete="off"
        type="text"
        value={value}
        onChange={e => onChange && onChange(e.target.value)}
        placeholder="Add Principle..."
        required="required"
      />
      <button type="submit" disabled={!isValid}>
        Add!
      </button>
    </form>
  );
};

AddPrincipleForm.propTypes = propTypes;
AddPrincipleForm.defaultProps = defaultProps;

export default AddPrincipleForm;
