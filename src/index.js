import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const disableReactDevTools = () => {
  const noop = () => undefined;
  /* eslint-disable no-underscore-dangle */
  const DEV_TOOLS = window.__REACT_DEVTOOLS_GLOBAL_HOOK__;
  
  if (typeof DEV_TOOLS === 'object') {
    for (const [key, value] of (Object).entries(DEV_TOOLS)) {
      DEV_TOOLS[key] = typeof value === 'function' ? noop : null;
    }
  }
};

process.env.NODE_ENV !== 'development' && disableReactDevTools()

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
