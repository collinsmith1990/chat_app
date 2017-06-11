import React, { Component } from 'react';
import RoomsShow from '../containers/rooms/show';
import RoomsIndex from '../containers/rooms/index';
import Header from './layouts/header';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className='main-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
