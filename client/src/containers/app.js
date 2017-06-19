import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppComponent from '../components/app';

class App extends Component {
  render() {
    return (
      <AppComponent { ...this.props } />
    );
  }
}

function mapStateToProps(state) {
  return {
    flash: state.flashMessages.flash
  }
}

export default connect(mapStateToProps)(App);

