import React from 'react';
import ReactDOM from 'react-dom';
import  counter  from 'Reducers/counterReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(counter);
import App from 'components/App/app';

ReactDOM.render(  <Provider store={store}><App /></Provider>, document.querySelector('.app'));

