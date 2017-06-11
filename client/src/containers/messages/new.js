import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { createMessage } from '../../actions/messages';
import NewMessage from '../../components/messages/new';

export const FORM = 'messageForm';

class New extends Component {
  handleSubmitForm(props) {
    this.props.createMessage(props, this.props.room);
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <NewMessage onSubmit={handleSubmit(this.handleSubmitForm.bind(this))} />
    );
  }
}

function mapStateToProps(state) {
  return { room: state.rooms.current };
}

export default connect(mapStateToProps,  { createMessage })(reduxForm({
  form: FORM
})(New));



