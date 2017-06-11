import React from 'react';

export default function(props) {
  const { input, label, type, autoComplete, meta: { touched, error, warning } } = props;

  return (
    <fieldset className='form-group'>
      <label>{label}</label>
      <input {...input} type={type} autoComplete={autoComplete} className='form-control' />
      { touched && error && <span className="text-danger">{error}</span> }
    </fieldset>
  );
}



