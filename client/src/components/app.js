import React, { Component } from 'react';
import RoomsShow from '../containers/rooms/show';
import RoomsIndex from '../containers/rooms/index';
import Header from './layouts/header';
import FlashMessage from './shared/flash_message';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <FlashMessage flash={this.props.flash} />
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
