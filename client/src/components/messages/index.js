import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Show from './show';
import LoadingIcon from '../shared/loading_icon';

class Index extends Component {
  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({ behavior: "instant" });
  }

  renderMessages() {
    return this.props.messages.map((message) => {
      return (
        <Show key={message.id} message={message} />
      );
    });
  }

  render() {
    if (this.props.loading) {
      return (
        <div className='chat messages-index'>
          <LoadingIcon scale={'0.5'}/>
        </div>
      );
    }
    return (
      <ul className='chat messages-index'>
        {this.renderMessages()}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }} />
      </ul>
    );
  }
}

export default Index;
