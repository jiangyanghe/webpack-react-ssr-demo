import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx'

ReactDOM.hydrate(<App />, document.getElementById('root'))// react 16之后使用了ssr渲染 需要将reactDOM.render 替换成reactDOM.hydrate

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./App.jsx').default;
    ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
  })
}
