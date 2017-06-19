import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeRoom } from '../../actions/rooms';

class RoomLink extends Component {
  handleClick() {
    this.props.changeRoom(this.props.room);
  }

  render() {
    if (this.props.room == this.props.current_room) {
      return (
        <li onClick={this.handleClick.bind(this)} className='room-link nav-item'>
          <a href='#' className='nav-link active'>{this.props.room.name}</a>
        </li>
      );

    } else {
      return (
        <li onClick={this.handleClick.bind(this)} className='room-link nav-item'>
          <a href='#' className='nav-link'>{this.props.room.name}</a>
        </li>
      );
    }
  }
}

function mapStateToProps(state) {
  return { current_room: state.rooms.current };
}

export default connect(mapStateToProps, { changeRoom })(RoomLink);
