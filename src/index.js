import React from 'react';
import ReactDOM from 'react-dom';
import  counter  from 'Reducers/counterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from 'components/App/app';

const store = createStore(counter);

ReactDOM.render(  <Provider store={store}><App /></Provider>, document.querySelector('.app'));
