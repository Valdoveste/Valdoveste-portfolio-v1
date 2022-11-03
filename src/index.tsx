import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as ReactDOMServer from 'react-dom/server';

ReactDOMServer.renderToString(<App />)
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
