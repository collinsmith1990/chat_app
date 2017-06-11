import React, { Component } from 'react';
import RoomLink from './room_link';
import LoadingIcon from '../shared/loading_icon';

class Index extends Component {
  renderRoomNames() {
    if (this.props.loading) {
      return (
        <LoadingIcon scale='.25' />
      );
    }
    return this.props.rooms.map((room) => {
      return (
        <RoomLink key={room.id} room={room} />
      );
    });
  }

  render() {
    return (
      <ul className='nav nav-pills flex-column'>{this.renderRoomNames()}</ul>
    );
  }
}

export default Index;
