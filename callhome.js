import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store';
import Homepage from './homepage';

// Create the Redux store
const store = createStore(reducer);

// Wrap the Homepage component with the Provider component
const callhome = () => (
  <Provider store={store}>
    <Homepage />
  </Provider>
);

export default callhome;
