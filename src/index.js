import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from 'ride-viewer/reducers'
import App from "ride-viewer/components/App"

import RideService from "ride-viewer/services/ride"

const store = createStore(rootReducer);
const viewport = document.getElementById("app");

const rideService = new RideService(store);

ReactDOM.render(
  <Provider store={store}>
    <App rideService={rideService} />
  </Provider>,
  viewport
);

module.hot.accept();
