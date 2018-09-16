import * as React from 'react';
import * as ReactDOM from 'react-dom';
import 'gestalt/dist/gestalt.css'

import App from './App'
import registerServiceWorker from './service-workers/registerServiceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
