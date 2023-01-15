import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

let loggedinReducer = (
  state = {
    loggedin: false,
    user: '',
  },
  action
) => {
  console.log(state);
  switch (action.type) {
    case 'loggedin/true':
      return {
        loggedin: (state.loggedin = true),
        user: (state.user = action.user),
      };
    case 'loggedin/false':
      return { loggedin: (state.loggedin = false), user: (state.user = '') };
    default:
      return state;
  }
};

let store = createStore(loggedinReducer);

export default store;
