import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signinUser } from '../../actions/auths';
import Input from '../shared/forms/input';

class New extends Component {
  handleFormSubmit({ email, password }) {
    this.props.signinUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props

    return(
      <div className='card row'>
        <div className='card-block col-6 offset-3'>
          <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
            <Field name='email' component={Input} type='text' label='Email:' />
            <Field name='password' component={Input} type='password' label='Password:' />
            <button action='submit' className='btn btn-primary'>Sign in</button>
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

  return errors
}

export default connect(null, { signinUser })(reduxForm({
  form: 'signinForm',
  validate
})(New));
