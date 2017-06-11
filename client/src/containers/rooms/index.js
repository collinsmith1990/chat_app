import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRooms } from '../../actions/rooms';
import RoomsIndex from '../../components/rooms/index';

class Index extends Component {
  componentWillMount() {
    this.props.fetchRooms();
  }

  render() {
    return (
      <RoomsIndex { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return {
    rooms: state.rooms.all,
    loading: state.rooms.loading
  };
}

export default connect(mapStateToProps, { fetchRooms })(Index);

