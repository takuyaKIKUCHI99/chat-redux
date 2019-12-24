// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import MessagesReducer from './reducers/messages_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';
import CurrentUsernameReducer from './reducers/current_username_reducer';

// Initial state
// const initialState = {
//   messages: [],
//   channels: ['general', 'react', 'tokyo'],
//   selectedChannel: 'general',
//   currentUsername: prompt("What is your username?") || `anonymous${Math.floor(10 + (Math.random() * 90))}`
// };

// State and reducers
const reducers = combineReducers({
  messages: MessagesReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUsername: CurrentUsernameReducer
});


// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
