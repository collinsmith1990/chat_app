import React, { Component } from 'react';

class LoadingIcon extends Component {
  render() {
    return (
      <div className='uil-ripple-css' style={{transform: `scale(${this.props.scale})`}}>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default LoadingIcon;
