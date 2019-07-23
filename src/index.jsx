import * as React from 'react';
import * as ReactDOM from 'react-dom';

// third party packages
import { Provider } from 'react-redux';

// components
import App from './App/App';

// helper functions
import store from './store';

export const app = ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

export default app;
