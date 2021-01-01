import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import Content from './Content';
import store from './store';
import AnimatedBackground from './utils/AnimatedBackground';

ReactDOM.render(
  <React.StrictMode>
    <AnimatedBackground />
    <Provider store={store}>
      <Content />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
