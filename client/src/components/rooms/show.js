import React, { Component } from 'react';
import RoomsIndex from '../../containers/rooms/index';
import MessagesIndex from '../../containers/messages/index';
import MessagesNew from '../messages/new';

class Show extends Component {
  render() {
    if (this.props.room) {
      return (
        <div className='row'>
          <div className='room col-1'>
            <RoomsIndex />
          </div>
          <div className='room col-10'>
            <MessagesIndex />
            <MessagesNew />
          </div>
        </div>
      );
    } else {
      return (
        <div className='row'>
          <div className='room col-1'>
            <RoomsIndex />
          </div>
          <div className='room col-10'>
            <p>Get a room</p>
          </div>
        </div>
      );
    }
  }
}

export default Show;
