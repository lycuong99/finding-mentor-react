import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';

import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { ThemeProvider, createTheme } from '@mui/material';
import theme from './themes';
import CssBaseline from '@mui/material/CssBaseline';
import UserStorage from './ultils/UserStorage';
import { SIGN_IN, SIGN_OUT } from './constants/actionTypes';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

if (UserStorage.getJWTDecode()) {
  var user = UserStorage.getJWTDecodeObj();
  var dateNow = new Date();
  let dateExp = new Date(user.exp * 1000);
  if (dateExp < dateNow) {
    console.log(user.exp);
    store.dispatch({
      type: SIGN_OUT
    });
  } else {
    store.dispatch({
      type: SIGN_IN, payload: {
      }
    });
  }

}

ReactDOM.render(

  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
  ,
  document.getElementById('root')
);
