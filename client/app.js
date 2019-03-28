import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'mobx-react'
import App from './views/App'

import appState from './store/app-state'

const root = document.getElementById('root')
ReactDOM.hydrate(
  <Provider appState={appState}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  root,
)// react 16之后使用了ssr渲染 需要将reactDOM.render 替换成reactDOM.hydrate

if (module.hot) {
  module.hot.accept('./views/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./views/App').default;
    ReactDOM.hydrate(<NextApp />, root)
  })
}
