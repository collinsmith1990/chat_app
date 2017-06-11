import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../../actions/auths';

class Destroy extends Component {
  componentWillMount() {
    this.props.signoutUser();
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default connect(null, { signoutUser })(Destroy)
