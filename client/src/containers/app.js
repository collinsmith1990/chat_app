import React, { Component } from 'react';
import { connect } from 'react-redux';
import { resolveRedirect } from '../actions/paths';
import AppComponent from '../components/app';

class App extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.redirect_to) {
      this.props.resolveRedirect(nextProps.redirect_to);
    }
  }

  render() {
    return (
      <AppComponent children={this.props.children} />
    );
  }
}

function mapStateToProps(state) {
  return { redirect_to: state.paths.redirect_to }
}

export default connect(mapStateToProps, { resolveRedirect })(App);

