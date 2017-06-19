import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  createSubscription,
  removeSubscription 
} from '../../actions/subscriptions';
import { ADD_MESSAGE } from '../../actions/types';
import { SET_ROOM_SUBSCRIPTION } from '../../actions/types';
import RoomsShow from '../../components/rooms/show';

class Show extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps && nextProps.room != this.props.room) {

      if (this.props.subscription) {
        this.props.removeSubscription(this.props.subscription);
      }

      this.props.createSubscription(
        { channel: 'MessagesChannel', room_id: nextProps.room.id },
        SET_ROOM_SUBSCRIPTION,
        (data, dispatch) => {
          dispatch({
            type: ADD_MESSAGE,
            payload: data
          });
        }
      );
    }
  }

  render() {
    return (
      <RoomsShow {...this.props} />
    );
  }
}

function mapStateToProps(state) {
  return {
    room: state.rooms.current,
    subscription: state.rooms.subscription
  };
}

export default connect(mapStateToProps, { createSubscription, removeSubscription })(Show);
