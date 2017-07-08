import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import mapController from './controller/mapController'

render(
  <App />,
  document.getElementById('root')
);

module.exports = {
  mapController: mapController
};


