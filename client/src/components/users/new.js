import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createUser } from '../../actions/users';
import Input from '../shared/forms/input';

class New extends Component {
  handleFormSubmit(formProps) {
    this.props.createUser(formProps);
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <div className='row'>
        <div className='col-6 offset-3'>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name='email' component={Input} type='text' label='Email:' />
            <Field name='password' component={Input} type='password' label='Password:' />
            <Field name='password_confirmation' component={Input} type='password' label='Confirm Password:' />
            <button action='submit' className='btn btn-primary'>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Enter a password';
  }

  if (!formProps.password_confirmation) {
    errors.password_confirmation = 'Enter a password confirmation';
  }

  if (formProps.password !== formProps.password_confirmation) {
    errors.password = 'Passwords must match';
  }

  return errors
}

export default connect(null,  { createUser })(reduxForm({
  form: 'usersForm',
  validate
})(New));

