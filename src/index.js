import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

if (process.env.NODE_ENV === 'development') {
  const eruda = require('eruda');
  eruda.init();
  eruda.show();
}

ReactDom.render(<App/>, document.getElementById('root'));
