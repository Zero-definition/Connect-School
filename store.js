// store.js
import { createStore } from 'redux';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SCHOOL':
      return action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
