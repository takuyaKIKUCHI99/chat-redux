import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Message from '../components/message';
import { fetchMessages } from '../actions/index';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages();
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel);
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Channel #{this.props.selectedChannel}</span>
        </div>
        <div className="channel-content" ref={(list) => { this.list = list; }}>
          {
            this.props.messages.map((message) => {
              return <Message key={message.id} message={message} />;
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
