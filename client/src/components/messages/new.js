import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createMessage } from '../../actions/messages';
import Input from '../shared/forms/input';

export const FORM = 'messageForm';

class New extends Component {
  handleSubmitForm(props) {
    this.props.createMessage(props, this.props.room);
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm.bind(this))}>
        <Field name='content' component={Input} type='text' autoComplete='off'/>
        <button action='submit' className='btn btn-primary'>Send</button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { room: state.rooms.current };
}

export default connect(mapStateToProps,  { createMessage })(reduxForm({
  form: FORM
})(New));
