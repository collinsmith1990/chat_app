import React from 'react';

export default function(props) {
  if (props.flash) {
    switch (props.flash.type) {
      case 'success':
        return(
          <div className='alert alert-success'>
            {props.flash.message}
          </div>
        );
      case 'danger':
        return (
          <div className='alert alert-danger'>
            <strong>Oops!</strong> {props.flash.message}
          </div>
        );
      default:
        return (
          <div className='alert alert-info'>
            {props.flash.message}
          </div>
        );
    }
  } else {
    return (
      <noscript />
    );
  }
}
