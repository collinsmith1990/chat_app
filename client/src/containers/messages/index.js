import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages } from '../../actions/messages';
import MessagesIndex from '../../components/messages/index';

class Index extends Component {
  componentWillMount() {
    this.props.fetchMessages(this.props.room);
  }

  componentWillUpdate(nextProps) {
    if (this.props.room.id != nextProps.room.id) {
      this.props.fetchMessages(nextProps.room);
    }
  }

  render() {
    return (
      <MessagesIndex {...this.props}/>
    );
  }
}

function mapStateToProps(state) {
  return { 
    room: state.rooms.current,
    messages: state.messages.all,
    loading: state.messages.loading
  };
}

export default connect(mapStateToProps, { fetchMessages })(Index);

