import React, {PureComponent} from 'react';
import Routes from './src/routes';
import {Provider} from 'react-redux';

import store from './src/store/store';

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
