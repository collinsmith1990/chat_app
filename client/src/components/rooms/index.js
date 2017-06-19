import React, { Component } from 'react';
import RoomLink from './room_link';
import LoadingIcon from '../shared/loading_icon';

class Index extends Component {
  renderRoomNames() {
    return this.props.rooms.map((room) => {
      return (
        <RoomLink key={room.id} room={room} />
      );
    });
  }

  render() {
    return (
      <ul className='rooms-index nav nav-pills flex-column'>{this.renderRoomNames()}</ul>
    );
  }
}

export default Index;
