import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import createStore from './app/createStore';

const store = createStore();
const rootEl = document.getElementById('container');

const renderApp = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
    rootEl
  );
};

renderApp();
