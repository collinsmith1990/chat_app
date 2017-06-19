import React, { Component } from 'react';
import RoomsIndex from '../../containers/rooms/index';
import MessagesIndex from '../../containers/messages/index';
import MessagesNew from '../messages/new';
import LoadingIcon from '../shared/loading_icon';

class Show extends Component {
  render() {
    if (this.props.room) {
      return (
        <div className='rooms-show row'>
          <div className='col-1'>
            <RoomsIndex />
          </div>
          <div className='col-10'>
            <MessagesIndex />
            <MessagesNew />
          </div>
        </div>
      );
    } else {
      return (
        <div className='rooms-show row'>
          <div className='col-1'>
            <RoomsIndex />
          </div>
          <div className='col-10'>
            <LoadingIcon scale='.75' />
          </div>
        </div>
      );
    }
  }
}

export default Show;
